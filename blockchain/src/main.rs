mod tests;
mod block;
mod transaction_types;
mod transaction_processor;
mod handlers;
#[macro_use]
extern crate serde_derive;
extern crate actix;
extern crate actix_web;
extern crate futures;

use std::thread;
use actix_web::{server, App, http};
use handlers::transactions;

fn main() {

    thread::spawn(move || {
        let sys = actix::System::new("example");

        server::new(
            || App::new()
                .resource("/", |r| r.method(http::Method::GET).f(transactions)))
            .bind("127.0.0.1:8088").unwrap()
            .start();

        println!("Started http server: 127.0.0.1:8088");
        let _ = sys.run();
    });
}