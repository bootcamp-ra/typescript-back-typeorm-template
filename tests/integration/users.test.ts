import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /users", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const user = await createUser();

    const response = await supertest(app).get("/users");
    
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: user.email
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});
