const express = require('express')
const app = express()
const port = 3000
const helmet = require('helmet')

app.use(helmet())


app.get('/', (req, res) => {
	return res.send('Hi, welcome to bry.sh')
})


app.listen(port, () => console.log(`listening on port ${port}`))
