import { Request, response, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


export class AuthneticateClientController {
    async handle(req:Request, res: Response) {
        const {username, password} = req.body

        const authenticateClientUseCase = new AuthenticateClientUseCase()

        const result = await authenticateClientUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
}