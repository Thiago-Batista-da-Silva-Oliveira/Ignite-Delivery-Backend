import {Router} from 'express'
import { enureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { enureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'

import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const deliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()


routes.post("/client/authenticate",authenticateClientController.handle)
routes.post("/client/",createClientController.handle)
routes.post("deliveryman/authenticate",authenticateDeliverymanController.handle)
routes.post("/deliveryman",createDeliverymanController.handle)
routes.put("/delivery/updateDeliveryman/:id",enureAuthenticateDeliveryman,updateDeliverymanController.handle)

routes.post("/delivery",enureAuthenticateClient,deliveryController.handle)
routes.get("/delivery/available",enureAuthenticateDeliveryman,findAllAvailableController.handle)

routes.get("/client/deliveries",enureAuthenticateClient,findAllDeliveriesController.handle)

routes.get("/deliveryman/deliveries",enureAuthenticateDeliveryman,findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/updateEndDate/:id", enureAuthenticateDeliveryman, updateEndDateController.handle)

export {routes}