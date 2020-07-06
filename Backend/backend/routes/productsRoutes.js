import express from 'express'
import productsmodel from '../models/productmodel'
const routes = express.Router()
routes.get("/createproduct", async (req,res) => {
  try {
    const product = new productsmodel({
      name: req.body.name,
      descrip: req.body.descrip,
      starts: req.body.starts,
      img: req.body.img,
      alt: req.body.alt,
      oldprice: req.body.oldprice,
      price: req.body.price,
      categorys: {
        genero: req.body.categorys.genero,
        superior: req.body.categorys.superior,
        inferior: req.body.categorys.inferior,
        calzado: req.body.categorys.calzado,
      },
      time: req.body.time,
      stock: req.body.stock,
    });
    const newproduct = await product.save();
    if(newproduct){
      res.send({
        msg:"producto creado correctamente"
      })
    }
  } catch (error) {
    res.status(404).send("error creando el producto", error)
  }
})

routes.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productsmodel.findById(id);
    if (product) {
      res.send(product);
      console.log(product)
    } 
  } catch (error) {
    res.send(error)
  }
});

routes.get("/products",async (req, res) => {
  try {
    const products = await productsmodel.find((x) => x);
    res.send(products);
  } catch (error) {
    res.send(error)
  }
});

export default routes
