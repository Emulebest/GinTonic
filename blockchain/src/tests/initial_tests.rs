use block::*;
use transaction_types::*;
use std::collections::HashMap;
extern crate serde_json;

#[test]
fn test_block_creation() {
    let block = Block::new(0, Data {amount: 0, transaction_list: vec![HashMap::new()]}, "Initial".to_owned());
    assert_eq!(block.index, 0);
    assert_eq!(block.previous_hash, "Initial");
    println!("Block hash: {}", block.hash)
}

#[test]
fn test_10_blocks() {
    let mut blocks = vec![Block::new(0, Data {amount: 0, transaction_list: vec![HashMap::new()]}, "Initial".to_owned())];
    let mut block = Block::new(0, Data {amount: 0, transaction_list: vec![HashMap::new()]}, "Initial".to_owned());
    for _ in 0..10 {
        let mut block_next = block.next_block();
        println!("Index: {}, Hash: {}, Previous: {}", block.index, block.hash, block.previous_hash);
        blocks.push(block_next);
        block = block.next_block()
    }
    assert_eq!(blocks[9].previous_hash, blocks[8].hash);
}

#[test]
fn test_json_variant() {
    let mut x = HashMap::new();
    x.insert("From".to_string(), "123".to_string());
    let json_str = serde_json::to_string(&x).expect("Error in marshalling");
    println!("{}", json_str)
}

#[test]
fn test_trans_type() {
    let mut x = HashMap::new();
    x.insert("from".to_string(), "123".to_string());
    x.insert("to".to_string(), "1234".to_string());
    x.insert("private_key".to_string(), "1235".to_string());
    assert_eq!(TransactionType::get_type(&mut x).is_ok(), true);
    let mut z = HashMap::new();
    z.insert("from".to_string(), "123".to_string());
    z.insert("to".to_string(), "1234".to_string());
    assert_eq!(TransactionType::get_type(&mut z).is_err(), true);
}