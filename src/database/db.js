import { PG } from 'pg'
import 'dotenv/config'
const { Pool } = PG

export const pool = new Pool()
