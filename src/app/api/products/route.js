import { NextResponse } from "next/server";
import { connectionStr } from "@/librarry/db";
import mongoose from "mongoose";
import { Product } from "@/librarry/product";


export async function GET(){
    try {
        await mongoose.connect(connectionStr)
   const data=await Product.find()
   console.log(data)
    return NextResponse.json({result:data})
    } catch (error) {
    console.log(error)
     return NextResponse.json({result:'error',error})
    }
}