extern crate serde;
extern crate serde_json;
extern crate crypto;
extern crate chrono;
extern crate actix_web;

use self::crypto::sha2::Sha256;
use self::chrono::prelude::*;
use std::collections::HashMap;
use block::crypto::digest::Digest;
use actix_web::{Result, Error, Responder, HttpResponse, HttpRequest};

#[derive(Serialize, Deserialize, Debug)]
pub struct Block {
    pub index: u64,
    pub timestamp: DateTime<Utc>,
    pub data: Data,
    pub previous_hash: String,
    pub hash: String,
}

impl Block {
    pub fn new(index: u64, data: Data, previous_hash: String) -> Self {
        let timestamp = Utc::now();
        let prev_hash = previous_hash;
        let result_string = Block::gen_hash(index, &data, &prev_hash, &timestamp.format("%Y-%m-%d %H:%M:%S").to_string());
        Block {
            timestamp,
            data,
            previous_hash: prev_hash,
            index,
            hash: result_string,
        }
    }

    #[inline]
    pub fn gen_hash(index: u64, data: &Data, previous_hash: &str, timestamp: &str) -> String {
        let mut hasher = Sha256::new();
        let mut string_builder = index.to_string();
        string_builder.push_str(&serde_json::to_string(data).unwrap());
        string_builder.push_str(timestamp);
        string_builder.push_str(previous_hash);
        hasher.input_str(&string_builder);
        hasher.result_str()
    }

    #[deprecated(note = "It was only used for testing initial structure")]
    pub fn next_block(&self) -> Self {
        let index = self.index + 1;
        let mut hm = Transaction(HashMap::new());
        hm.0.insert("Index".to_owned(), index.to_string());
        let data = Data {
            amount: 1,
            transaction_list: vec![hm]
        };
        let previous_hash = self.hash.clone();
        Block::new(index, data, previous_hash)
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Data {
    pub amount: u8,
    pub transaction_list: Vec<Transaction>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Transaction(pub HashMap<String, String>);


impl Responder for Transaction {
    type Item = HttpResponse;
    type Error = Error;

    fn respond_to(self, req: HttpRequest) -> Result<HttpResponse, Error> {
        let body = serde_json::to_string(&self)?;

        // Create response and set content type
        Ok(HttpResponse::Ok()
            .content_type("application/json")
            .body(body))
    }
}