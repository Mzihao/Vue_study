import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'DRF_study',
    user: 'root',
    password: 'wangt777'
})

export default pool.promise()
