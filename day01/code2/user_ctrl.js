import db from './db/index.js'

async function getAllUser(req, res) {
    const result = await db.query('select id, username, nickname from ev_users')
    console.log(result)
}

getAllUser()
