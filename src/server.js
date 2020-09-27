// Servidor
const express = require('express')
const server = express()

const { pageLanding,
    pageStudy,
    pageGiveclasses,
    saveClasses
} = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (scc, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/giveclasses", pageGiveclasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)
// console.log(__dirname)