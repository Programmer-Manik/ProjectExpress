import { Server } from 'http'
import app from './app'
const PORT = 5000

let serve : Server

async function bootstrap(){
   serve = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
}
bootstrap()
