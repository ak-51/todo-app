import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const pswd = process.env.DB_PASSWORD
const Pool = pg.Pool

const pool = new Pool({
    user: "postgres",
    password: pswd,
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

export default pool