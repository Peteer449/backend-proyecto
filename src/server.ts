import express from "express"
import path from "path"
import bodyParser from 'body-parser'


const app = express()

const PORT = 8080

app.listen(PORT,()=>{console.log(PORT)})

import {ProductsClass} from "./productsClass"
import { Table } from "./index"
import {getTime} from './utils/utils'
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const table = new Table()
const productClass = new ProductsClass()

//Routers
const routerProducts = express.Router()
const routerCart = express.Router()

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})

//Delete a product by id
routerProducts.delete("/:id",async(req,res)=>{
  const id = req.params.id
  await productClass.deleteById(parseInt(id))
  const allProducts = await productClass.getAll()
  res.json(allProducts)
})

//Update a product by id
routerProducts.put("/:id",async(req,res)=>{
  const id =  req.params.id
  const product = await productClass.getById(parseInt(id))
  product.actualizado = "Actualizado"
  const allProducts = await productClass.getAll()
  res.json(allProducts)
})

//Add a new item in routerProducts
routerProducts.post("/" , (req,res,next)=>{
  const title = req.body.title
  const price = req.body.price
  const file = req.file
  productClass.save({title,price,file})
  
  console.log(productClass.getAll(),title)
  res.sendFile(__dirname+"/products.html")
})

//Get one item from the routerProducts
routerProducts.get("/:id",async(req,res)=>{
  const id = req.params.id
  const product = await productClass.getById(parseInt(id))
  if(!product){
    res.json({error:'producto no encontrado'})
  }
  res.json(product)
})

//Get all the products from the router class
routerProducts.get("/",async(req,res)=>{
  res.sendFile(__dirname+"/products.html")
})

//Define the path of the router
app.use("/api/productos", routerProducts)
app.use("/api/carrito",routerCart)