import Product from "../models/products.models.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    }catch(err){
        console.log("Error fetching products: ", err);
        res.status(500).json({ success: false, message: "Server Error"})
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;


    if(!product.name || !product.price || !product.image || !product.description)
      return res.status(404).json({ Success:false, message:"Fill in all required fields"})  

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({Success:true, message:"Product added successfully", data: newProduct})
    } catch(err){
        res.status(500).json({Success:false, message:err.message})
        console.error(err.message)
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params

    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false, message:"Invalid ID"})
    }
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({Success:true, message:"Product updated successfully", data: updatedProduct})
    }catch(err){
        res.status(500).json({Success:false, message: "server error", data: err.message})
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false, message:"Invalid ID"})
    }
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({Success:true, message:"Product deleted successfully"})
    } catch(err){
        res.status(404).json({Success:false, message: "Product not found"})
        console.error(err.message)
    }

}

