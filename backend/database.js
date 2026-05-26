import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export async function initDB() {
    const db = await open({
        filename: './backend/database.sqlite', 
        driver: sqlite3.Database
    });


    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT
        )
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            stock INTEGER DEFAULT 0
        )
    `);

    return db;
}
