import { Schema, model, models } from 'mongoose'

const productsSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isNew: { type: String, required: true },
    imageUrl: { type: String, required: true }
})

const Product = models.Product || model('Product', productsSchema)

export default Product