use block::Transaction;
use postgres::{Connection, TlsMode};

pub fn send_coins(trans: Transaction) {
    let from = trans.0.get("from").unwrap();
    let to = trans.0.get("to").unwrap();
    let amount = trans.0.get("amount").unwrap();
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

}

pub fn unknown(trans: Transaction) {
    panic!("Unknown transaction")
}