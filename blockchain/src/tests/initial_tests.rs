use block::*;
use std::collections::HashMap;

#[test]
fn test_block_creation() {
    let block = Block::new(0, Data {amount: 0, transaction_list: vec![HashMap::new()]}, None);
    assert_eq!(block.index, 0);
    assert_eq!(block.previous_hash.unwrap(), "Initial");
    println!("Block hash: {}", block.hash)
}