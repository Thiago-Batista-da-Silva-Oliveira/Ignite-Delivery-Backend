import { NextFunction, Request, Response } from "express";
 import {verify} from 'jsonwebtoken'

 interface IPayload {
  sub: string
 }

export async function enureAuthenticateClient(req:Request, response:Response, next:NextFunction) {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return response.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authHeader.split(" ")

    try{
      const {sub} =  verify(token,"d854as84fas84") as IPayload
    
      req.id_client = sub

      return next()
    } catch(err){
        return response.status(401).json({
            message: "Invalid token!"
        })
    }
}