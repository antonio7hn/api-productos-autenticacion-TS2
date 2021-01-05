"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "cs44d2fr56",
    host: "localhost",
    database: 'db_api',
    port: 5432
});
exports.default = pool;
