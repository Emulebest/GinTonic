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
    let pub_key = trans.0.get("public").unwrap();
    let amount: i64 = 1;
    println!("Before db request");
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None).unwrap();
    conn.execute("UPDATE wallet SET amount = amount - $2 WHERE pub_key = $1",
                 &[pub_key, &amount]).unwrap();
    println!("Before unwrap");
    let level_num = level.parse::<i8>().unwrap();
    if level_num == 1 {
        let res = reqwest::get("http://172.21.0.1:3001/api/robots/bot/commands/On");
        println!("{:?}", res.unwrap());
    } else if level_num == 2 {
        let res = reqwest::get("http://172.21.0.1:3001/api/robots/bot/commands/blink");
        println!("{:?}", res.unwrap());
    } else if level_num == 0 {
        let res = reqwest::get("http://172.21.0.1:3001/api/robots/bot/commands/Off");
        println!("{:?}", res.unwrap());
    }
}

pub fn unknown(trans: Transaction) {
    panic!("Unknown transaction")
}