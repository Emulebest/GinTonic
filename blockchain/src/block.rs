extern crate serde;
extern crate serde_json;
extern crate crypto;
extern crate chrono;

use self::crypto::sha2::Sha256;
use self::chrono::prelude::*;
use std::collections::HashMap;
use block::crypto::digest::Digest;


#[derive(Serialize, Deserialize, Debug)]
struct Block {
    index: u64,
    timestamp: DateTime<Utc>,
    data: Data,
    previous_hash: Option<String>,
    hash: String
}

impl Block {
    fn new(index: u64, data: Data, previous_hash: Option<String>) -> Self {
        let timestamp = Utc::now();
        let mut hasher = Sha256::new();
        let mut string_builder = index.to_string();
        string_builder.push_str(&serde_json::to_string(&data).unwrap());
        string_builder.push_str(&timestamp.format("%Y-%m-%d %H:%M:%S").to_string());
        let prev_hash = previous_hash.unwrap_or("Initial".to_string());
        string_builder.push_str(&prev_hash.clone());
        hasher.input_str(&string_builder);
        let result_string = hasher.result_str();
        Block {
            timestamp,
            data,
            previous_hash: Some(prev_hash),
            index,
            hash: result_string,
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
struct Data {
    amount: u8,
    transaction_list: Vec<Transaction>
}

type Transaction = HashMap<String, String>;
