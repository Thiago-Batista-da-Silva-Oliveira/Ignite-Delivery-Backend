import { Request, response, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliveryUseCase";


export class AuthenticateDeliverymanController {
    async handle(req:Request, res: Response) {
        const {username, password} = req.body

        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

        const result = await authenticateDeliverymanUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
}