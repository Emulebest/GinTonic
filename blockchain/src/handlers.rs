extern crate actix_web;
extern crate serde_json;

use actix_web::{HttpRequest};
use block::Transaction;
use std::collections::HashMap;
use actix_web::Json;
use transaction_types::*;
use actix_web::Responder;
use wallets::Wallet;

pub fn transactions(trans: Json<Transaction>) -> Json<Transaction> {
    let mut trans_typer = trans.clone();
    match TransactionType::get_type(&mut trans_typer) {
        Ok(TransactionType::SendTransaction) => {
            trans
        },
        _ => {
            trans
        }
    }
}


pub fn create_wallet(req: HttpRequest) -> Wallet {
    let new_wallet = Wallet::new();
    new_wallet
}

