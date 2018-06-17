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
use actix_web::middleware::cors::Cors;

fn main() {
    db_init();

    server::new(
        || vec![
            App::new()
                .prefix("/send")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::POST).with(transaction_send))
                        .register()
                }),
            App::new()
                .prefix("/wallet_create")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::GET).f(create_wallet))
                        .register()
                }),
            App::new()
                .prefix("/mine")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::POST).with(mine))
                        .register()
                }),
            App::new()
                .prefix("/balance")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::POST).with(get_amount))
                        .register()
                }),
            App::new()
                .prefix("/history")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::GET).with(transaction_history))
                        .register()
                }),
            App::new()
                .prefix("/device")
                .configure(|app| {
                    Cors::for_app(app)
                        .allowed_origin("*")
                        .resource("/", |r| r.method(http::Method::GET).with(device_transaction))
                        .register()
                }),
        ])
        .bind("0.0.0.0:8081").unwrap().run();
}

fn db_init() -> Result<()> {
    let conn = Connection::connect("postgres://postgres:123@db:5432",
                                   TlsMode::None)?;
    println!("{:?}", conn);
    let x = conn.execute("CREATE TABLE IF NOT EXISTS wallet (
                    pub_key TEXT,
                    private_key TEXT,
                    amount  BIGINT
                  )", &[])?;
    conn.execute("CREATE TABLE IF NOT EXISTS transaction (
                    data TEXT
                  )", &[])?;
    conn.execute("CREATE TABLE IF NOT EXISTS transaction_history (
                    data TEXT
                  )", &[])?;
    println!("Done");
    Ok(())
}