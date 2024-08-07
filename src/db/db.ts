import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.PG_URL ?? 'postgres://postgres:postgres@localhost:5432', { debug: false });
const db = drizzle(queryClient);
export const DB = db;
