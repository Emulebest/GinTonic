extern crate sha2;
extern crate postgres;
extern crate serde_json;
extern crate rand;

use self::sha2::Sha512;
use postgres::{Connection, TlsMode};
use actix_web::Responder;
use actix_web::HttpResponse;
use actix_web::Error;
use actix_web::HttpRequest;
use actix_web::Result;
use self::rand::{thread_rng, Rng};

#[derive(Serialize, Deserialize, Clone)]
pub struct Wallet {
    pub pub_key: String,
    pub private_key: String,
    pub amount: i64,
}

impl Wallet {
    pub fn new() -> Self {
        let conn = Connection::connect("postgres://postgres:123@db:5432",
                                       TlsMode::None).unwrap();
        let pub_key = rand_string();
        let private_key = rand_string();
        let wal = Wallet {
            amount: 0,
            pub_key,
            private_key
        };
        conn.execute("INSERT INTO wallet (pub_key, private_key, amount) VALUES ($1, $2, $3)",
                     &[&wal.pub_key, &wal.private_key, &wal.amount]).unwrap();
        wal
    }
}

impl Responder for Wallet {
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

fn rand_string() -> String {
    let rand_string: String = thread_rng().gen_ascii_chars().take(10).collect();
    rand_string
}