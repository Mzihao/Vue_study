import fs from 'fs'

function getFile(fPath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fPath, 'utf8', (err, dataStr) => {
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}

getFile('./files/1.txt').then(r1 => {console.log(r1)}, err => {console.log(err.message)})
getFile('./files/11.txt').then(r1 => {console.log(r1)}).catch(err => {console.log(err.message)})