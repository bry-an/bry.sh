const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
	res.send('looks like nginx is working')
})

app.listen(port, () => console.log(`listening on port ${port}`))
