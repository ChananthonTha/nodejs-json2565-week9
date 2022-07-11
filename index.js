const http = require('http')
const msg = require('./message.js')
// const {loadUser} = require('./user_model')
const {loadVnl2022} = require('./vnl2022_model.js')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res) => {
    // const jsonContent = JSON.stringify(loadUser())
    const jsonContent = JSON.stringify(loadVnl2022())
    res.writeHead(200, { 'Content-Type' : 'text/plain' })
    res.write(`${jsonContent}`)
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Start server runnig at http://${host}:${PORT}`)
})
