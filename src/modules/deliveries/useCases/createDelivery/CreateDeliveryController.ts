import { Request, Response } from "express";
import { CreateDeliveryuseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name } = req.body;
    const { id_client } = req;

    const createDeliveryUseCase = new CreateDeliveryuseCase();

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return res.json(delivery);
  }
}
