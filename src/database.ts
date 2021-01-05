import {Pool} from 'pg'

const pool = new Pool({
    user: "postgres",
    password:"cs44d2fr56",
    host: "localhost",
    database: 'db_api',
    port: 5432
})

export default pool