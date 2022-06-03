import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliveryController = new AuthenticateDeliverymanController();

routes.post("/client/", createClientController.handler);
routes.post("/client/authenticate/", authenticateClientController.handler);
routes.post("/deliveryman/", createDeliverymanController.handler);
routes.post(
  "/deliveryman/authenticate/",
  authenticateDeliveryController.handler
);

export { routes };
