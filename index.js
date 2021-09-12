const fetchP = import('node-fetch').then(mod => mod.default) 
const fetch = (...args) => fetchP.then(fn => fn(...args))

class Crypto {
    async getUserBalance(id) {
        const response = await fetch('https://baguette-game.com:1000/api/getUserBalance', {
            method: 'post',
            body: JSON.stringify({
                id: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    }
    
    async connectServer(id, server, key) {
        const response = await fetch('https://baguette-game.com:1000/api/connectServer', {
            method: 'post',
            body: JSON.stringify({
                id: id,
                server: server,
                key: key
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    }
    
    async transfer(id, recipient_id, amount, key) {
        const response = await fetch('https://baguette-game.com:1000/api/transfer', {
            method: 'post',
            body: JSON.stringify({
                id: id,
                recipient_id: recipient_id,
                key: key,
                amount: amount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    }
}

module.exports = Crypto;