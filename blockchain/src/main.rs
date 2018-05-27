mod tests;
mod block;
mod transaction_types;
mod transaction_processor;
mod handlers;
mod processor;
mod wallets;

#[macro_use]
extern crate serde_derive;
extern crate actix;
extern crate actix_web;
extern crate futures;
extern crate postgres;

use std::thread;
use actix_web::{server, App, http};
use handlers::*;
use postgres::{Connection, TlsMode, Result};

fn main() {
    db_init();

    server::new(
        || vec![
            App::new()
                .prefix("/transaction")
                .resource("/", |r| r.method(http::Method::GET).with(transactions)),
            App::new()
                .prefix("/wallet_create")
                .resource("/", |r| r.method(http::Method::GET).f(create_wallet)),
        ])
        .bind("0.0.0.0:8081").unwrap().run();

}

fn db_init() -> Result<()> {
    println!("Hello");
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None)?;
    println!("{:?}", conn);
    let x = conn.execute("CREATE TABLE IF NOT EXISTS wallet (
                    pub_key TEXT,
                    private_key TEXT,
                    amount  BIGINT
                  )", &[])?;
    println!("Done");
    Ok(())
}