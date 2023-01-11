import express from 'express';
import cors from 'cors';
import { ping } from './endpoints/ping';
import { createClient } from './endpoints/createClient';
import { getAllClients } from './endpoints/getAllClients';
import { getAllProducts } from './endpoints/getAllProducts';
import { createOrder } from './endpoints/createOrder';
import { getStock } from './endpoints/getStock';

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", ping)
app.post("/clients", createClient)
app.get("/clients", getAllClients)
app.get("/products", getAllProducts)
app.get("/stock", getStock)
app.post("/orders", createOrder)

app.listen(3003, () => {
    console.log("Server running on port 3003")
})
