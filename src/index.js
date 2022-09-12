import {createServer, IncomingMessage, ServerResponse} from 'http'
import fs, {readFileSync} from 'fs'
import path from 'path'

const port = process.env.PORT || 5000

const app = express()

app.get('/gundam', listGundams)

app.listen(port, () => console.log(`Server listening on port ${port}`))

const listGundams = async (req, res) => {
    const gundamFile = path.join(__dirname, '../gundam.json')
    try {
        const data = await readFile(gundamFile)
        res.json(JSON.parse(data))
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
