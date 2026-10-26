import express from 'express'
import { pokemonRouter } from '../Routes/pokemon.Routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req,res) => {
    return res.json({
        message: "OK"
    })
})

app.use("/pokemon", pokemonRouter)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);
})