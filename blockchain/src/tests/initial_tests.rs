use block::*;
use std::collections::HashMap;

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
    assert_eq!(blocks[9].previous_hash, blocks[8].hash)
}