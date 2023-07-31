import { NextResponse } from "next/server";
import { datas } from "@/db";

export  function GET(res){
    return  NextResponse.json(datas,{status:200})
}

export async function POST(req,res){
    let payload= await req.json()
    // console.log(payload);
    if(!payload.name || !payload.email || !payload.age){
    return  NextResponse.json({Result:"Required Field Not Found",success:false},{status:400})
    }
    return  NextResponse.json({Result:"New User Created", success:true},{status:201})
}

export async function PUT(req,res){
    let payload= await req.json()
    // console.log(payload);
    if(!payload.name || !payload.email || !payload.age){
    return  NextResponse.json({Result:"Required Field Not Found",success:false},{status:400})
    }
    return  NextResponse.json({Result:"User Data Updated", success:true},{status:201})
}