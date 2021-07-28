import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../entities/User";

export async function getUsers () {
  const users = await getRepository(User).find({
    select: ["id", "email"]
  });
  
  return users;
}
