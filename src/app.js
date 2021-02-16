const express = require('express')
const app = express()
const port = 3000
const helmet = require('helmet')
const path = require('path')


app.use(helmet())


app.get('/', (req, res) => {
	return res.sendFile(path.resolve(__dirname, '../public/html/index.html'))
})


app.listen(port, () => console.log(`listening on port ${port}`))
