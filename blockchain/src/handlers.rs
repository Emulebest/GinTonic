extern crate actix_web;
extern crate serde_json;

use actix_web::{HttpRequest, Result, Error};
use block::Transaction;
use std::collections::HashMap;
use actix_web::Json;
use transaction_types::*;
use wallets::Wallet;
use postgres::{Connection, TlsMode};
use processor::*;
use actix_web::Responder;

#[derive(Deserialize)]
pub struct WalletInfo {
    pub address: String
}

#[derive(Deserialize, Debug, Serialize, Clone)]
pub struct DeviceT {
    pub device: String,
    pub level: String,
    pub private: String,
    pub public: String,
}

#[derive(Deserialize, Debug, Serialize, Clone)]
pub struct SendT {
    pub from: String,
    pub to: String,
    pub amount: String,
    pub private: String,
}

pub fn transaction_send(trans: Json<SendT>) -> Json<String> {
    let mut trans_typer = trans.clone();
    let transaction = trans_typer.clone();
    let serialized = serde_json::to_string(&transaction).unwrap();
    println!("{}", serialized);
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("INSERT INTO transaction (data) VALUES ($1)",
                 &[&serialized]).unwrap();
    conn.execute("INSERT INTO transaction_history (data) VALUES ($1)",
                 &[&serialized]).unwrap();
    Json(serialized)
}

pub fn mine(pub_key: Json<WalletInfo>) -> Result<Json<String>> {
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("UPDATE wallet SET amount = amount+50 WHERE pub_key = $1",
                 &[&pub_key.address]).unwrap();
    for row in &conn.query("SELECT data FROM transaction", &[]).unwrap() {
        let data: String = row.get(0);
        let mut trans: Transaction = serde_json::from_str(&data).unwrap();
        match TransactionType::get_type(&mut trans) {
            Ok(t) => {
                println!("{:?}", t);
                match t {
                    TransactionType::SendTransaction => {
                        println!("Here send");
                        send_coins(trans);
                    },
                    TransactionType::RewardTransaction => {
                        println!("Here reward");
                        get_reward(trans);
                    },
                    TransactionType::DeviceTransaction => {
                        println!("Here device");
                        device(trans);
                    },
                    TransactionType::UnknownTransaction => {
                        println!("Here unknown");
                        unknown(trans);
                    }
                };
            },
            Err(e) => {
                panic!(e);
            }
        }
    }
    conn.execute("DELETE FROM transaction", &[]).unwrap();
    Ok(Json("All transactions Okay".to_owned()))
}

pub fn get_amount(pub_key: Json<WalletInfo>) -> Json<HashMap<&'static str, i64>> {
    let mut okay = HashMap::new();
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    for row in &conn.query("SELECT amount FROM wallet WHERE pub_key = $1", &[&pub_key.address]).unwrap() {
        let amount: i64 = row.get(0);
        okay.insert("amount", amount);
    }
    Json(okay)
}


pub fn create_wallet(req: HttpRequest) -> Wallet {
    let new_wallet = Wallet::new();
    new_wallet
}

pub fn transaction_history(req: HttpRequest) -> Json<HashMap<String, Vec<String>>> {
    let mut transactions = HashMap::new();
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    let mut transaction_list: Vec<String> = Vec::new();
    for row in &conn.query("SELECT data FROM transaction_history", &[]).unwrap() {
        let data: String = row.get(0);
        transaction_list.push(data);
    }
    transactions.insert("transactions".to_owned(), transaction_list);
    Json(transactions)
}

pub fn device_transaction(device: Json<DeviceT>) -> Json<HashMap<String, String>> {
    let mut response = HashMap::new();
    let device = device.clone();
    let serialized = serde_json::to_string(&device).unwrap();
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("INSERT INTO transaction (data) VALUES ($1)",
                 &[&serialized]).unwrap();
    conn.execute("INSERT INTO transaction_history (data) VALUES ($1)",
                 &[&serialized]).unwrap();
    response.insert("Status".to_owned(), "Okay".to_owned());
    Json(response)
}

