import { getRepository } from "typeorm";

import User from "../../src/entities/User";

export async function createUser () {
  const user = await getRepository(User).create({
    email: "email@email.com",
    password: "123456"
  });

  await getRepository(User).save(user);

  return user;
}
