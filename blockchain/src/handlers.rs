extern crate actix_web;
extern crate serde_json;

use actix_web::{HttpRequest};
use block::Transaction;
use std::collections::HashMap;

pub fn transactions(req: HttpRequest) -> Transaction {
    Transaction(HashMap::new())
}

