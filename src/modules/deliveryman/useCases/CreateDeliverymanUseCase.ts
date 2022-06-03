import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface IcreateDeliverymnan {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: IcreateDeliverymnan) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (deliverymanExist) {
      throw new Error("deliveryman already exists");
    }

    // Criptografar senha
    const hashPassword = await hash(password, 10);
    //Salvar o client

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username: username.toLowerCase(),
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
