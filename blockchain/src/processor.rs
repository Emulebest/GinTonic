use block::Transaction;
use postgres::{Connection, TlsMode};
use reqwest;

pub fn send_coins(trans: Transaction) {
    let from = trans.0.get("from").unwrap();
    let to = trans.0.get("to").unwrap();
    let amount = trans.0.get("amount").unwrap();
    let amount = &amount.parse::<i64>().unwrap();
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("UPDATE wallet SET amount = amount - $2 WHERE pub_key = $1",
                 &[from, amount]).unwrap();
    conn.execute("UPDATE wallet SET amount = amount + $2 WHERE pub_key = $1",
                 &[to, amount]).unwrap();
}

pub fn get_reward(trans: Transaction) {
    let to = trans.0.get("to").unwrap();
    let amount = trans.0.get("amount").unwrap();
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("UPDATE wallet SET amount = amount + $2 WHERE pub_key = $1",
                 &[to, amount]).unwrap();
}

pub fn device(trans: Transaction) {
    let device = trans.0.get("device").unwrap();
    let level = trans.0.get("level").unwrap();
    let pub_key = trans.0.get("pub_key").unwrap();
    let amount: i64 = 1;
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("UPDATE wallet SET amount = amount - $2 WHERE pub_key = $1",
                 &[pub_key, &amount]).unwrap();
    let level_num = level.parse::<i8>().unwrap();
    if level_num == 1 {
        reqwest::get("localhost:3001/api/robots/bot/commands/On");
    } else if level_num == 2 {
        reqwest::get("localhost:3001/api/robots/bot/commands/blink");
    } else if level_num == 0 {
        reqwest::get("localhost:3001/api/robots/bot/commands/Off");
    }
}

pub fn unknown(trans: Transaction) {
    panic!("Unknown transaction")
}