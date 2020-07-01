import express from 'express'
import data from './data'

const app = express();

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id
  const product = data.productos.find((x) => x.id === parseInt(id));
  if(product){
    res.send(product);
  }else{
    res.status(404).send({msg: "este producto no existe"})
  }
});

app.get("/api/products",(req,res) =>{
  res.send(data.productos);
})

app.listen(5000, () => console.log("server start at http://localhost:5000"))