import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 segundos, para que falle rápido si algo anda mal
});

// Test de conexión al arrancar
pool
  .query("SELECT 1 AS ok")
  .then(([rows]) => {
    console.log("✅ Conexión a MySQL OK:", rows[0]);
  })
  .catch((err) => {
    console.error("❌ Error conectando a MySQL:", err);
  });
