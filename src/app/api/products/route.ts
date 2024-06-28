import connect from "@/lib/db"
import Product from "@/lib/models/products"
import { NextResponse } from "next/server"


export const GETr = async () => {
    try {
        await connect()
        const products = await Product.find()
        return new NextResponse(JSON.stringify({ products }), { status: 200 })
    } catch (err) {
        return new NextResponse(`error`, { status: 500 })
    }
}

export const POST = async (request: Request) => {
    const body = await request.json()
    try {
        await connect()
        const newProduct = new Product(body)
        await newProduct.save()

        return new NextResponse(JSON.stringify({ newProduct }), { status: 200 })
    } catch (err) {
        return new NextResponse(`error in ${err}`)
    }
}

