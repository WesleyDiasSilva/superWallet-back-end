import { User } from "@prisma/client";
import { respService } from "../../interfaces/servicesInterfaces/responseServiceInterface";
import bcrypt from "bcrypt";
import { serviceFindSession } from "../sessions/serviceFindSession";
import { updateSession } from "../../repositories/session/repositoryUpdateSession";
import { createJWT } from "../../utils/createJwt";
import { createSession } from "../../repositories/session/repositoryCreateSession";

export async function serviceLogin(
  user: User,
  password: string
): Promise<respService> {
  try {
    const validationPassword = bcrypt.compareSync(password, user.password);
    if (!validationPassword) {
      return { status: false, message: "Password Invalid!" };
    }

    const dataToken = {
      email: user.email,
      name: user.name,
      image: user.image ?? "",
    };

    const token = createJWT(dataToken);
    const existSession = await serviceFindSession(user.email);
    if (existSession.message) {
      await updateSession({ email: user.email, token });
      return { status: true, message: token };
    }
    await createSession({ email: user.email, token });
    return { status: true, message: token };
  } catch {
    return { status: false, message: "error" };
  }
}
