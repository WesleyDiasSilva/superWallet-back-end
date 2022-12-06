import jwt from "jsonwebtoken";

interface dataJWT {
  email: string;
  name: string;
  image?: string;
}

export function createJWT(data: dataJWT): string {
  const secret = process.env.SECRET_JWT;
  const info = data;
  const sevenDays = 60 * 24 * 7;
  const config = { expiresIn: sevenDays };
  const token = jwt.sign(info, secret ?? "", config);
  return token;
}
