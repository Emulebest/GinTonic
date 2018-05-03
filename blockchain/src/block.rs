extern crate serde;
extern crate serde_json;
extern crate crypto;
extern crate chrono;

use self::crypto::sha2::Sha256;
use self::chrono::prelude::*;
use std::collections::HashMap;
use block::crypto::digest::Digest;


#[derive(Serialize, Deserialize, Debug)]
pub struct Block {
    pub index: u64,
    pub timestamp: DateTime<Utc>,
    pub data: Data,
    pub previous_hash: Option<String>,
    pub hash: String
}

impl Block {
    pub fn new(index: u64, data: Data, previous_hash: Option<String>) -> Self {
        let timestamp = Utc::now();
        let prev_hash = previous_hash.unwrap_or("Initial".to_string());
        let result_string = Block::gen_hash(index, &data, &prev_hash, &timestamp.format("%Y-%m-%d %H:%M:%S").to_string());
        Block {
            timestamp,
            data,
            previous_hash: Some(prev_hash),
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
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Data {
    pub amount: u8,
    pub transaction_list: Vec<Transaction>
}

pub type Transaction = HashMap<String, String>;
