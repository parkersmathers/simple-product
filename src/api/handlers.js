import { rest } from "msw";
import data from "./data.json";

export const handlers = [
  // Handles GET products request
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
