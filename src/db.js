import { Pool } from "pg";

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  host: db.lmpxfnnvtgrqredngjug.supabase.co,
  ssl: { rejectUnauthorized: false },
  family: 4,
});
