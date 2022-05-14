import {Router} from 'express'
import { AuthneticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthneticateClientController()

routes.post("/client/",createClientController.handle)
routes.post("/authenticate",authenticateClientController.handle)

export {routes}