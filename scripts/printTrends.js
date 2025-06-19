const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "../trends.sqlite");
const db = new Database(dbPath);

const rows = db.prepare("SELECT * FROM google_trends ORDER BY created_at DESC LIMIT 10").all();
console.log(rows);
