import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.join(process.cwd(), "trends.sqlite");

// Create DB file if not exists
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "");
}

const db = new Database(dbPath);

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS google_trends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    source TEXT DEFAULT 'google',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
