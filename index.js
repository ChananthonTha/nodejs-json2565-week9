const http = require('http')
const msg = require('./message.js')
const {loadUser} = require('./user_model')
const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res) => {
    const jsonContent = JSON.stringify(loadUser())
    res.writeHead(200, { 'Content-Type' : 'text/plain' })
    res.write(`${msg.message}`)
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Start server runnig at http://${host}:${PORT}`)
})