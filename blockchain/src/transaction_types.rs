use block::Transaction;

extern crate serde_json;

use std::error::Error;
use std::fmt;

#[derive(Debug)]
pub enum TransactionType {
    RewardTransaction,
    SendTransaction,
    DeviceTransaction,
    UnknownTransaction,
}

impl TransactionType {
    pub fn get_type(t: &mut Transaction) -> Result<Self, TransactionError> {
        if !t.0.contains_key("private_key") {
            Err(TransactionError::new("No private key provided!"))
        } else {
            if t.0.contains_key(&"from".to_string()) && t.0.contains_key(&"to".to_string()) && t.0.contains_key(&"amount".to_string()) {
                if let Some(from) = t.0.get(&"from".to_string()) {
                    if from == &"system" {
                        Ok(TransactionType::RewardTransaction)
                    } else {
                        Ok(TransactionType::SendTransaction)
                    }
                } else {
                    Err(TransactionError::new("something wrong with the transaction"))
                }
            } else if t.0.contains_key(&"device".to_string()) {
                Ok(TransactionType::DeviceTransaction)
            } else {
                Ok(TransactionType::UnknownTransaction)
            }
        }
    }
}

#[derive(Debug)]
pub struct TransactionError {
    pub details: String
}

impl TransactionError {
    pub fn new(msg: &str) -> Self {
        TransactionError { details: msg.to_string() }
    }
}

impl Error for TransactionError {
    fn description(&self) -> &str {
        &self.details
    }
}

impl fmt::Display for TransactionError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.details)
    }
}