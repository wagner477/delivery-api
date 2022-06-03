import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    // Receber username, password
    // Verificar se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username: username.toLocaleLowerCase(),
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    // Verificar se senha corresponde ao username

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    // Gerar Token

    const token = sign({ username }, "9eb71ab7420eb452a22787ca4fab501b", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
