import { prisma } from "../../../../database/prismaClient";

interface iCreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryuseCase {
  async execute({ item_name, id_client }: iCreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
