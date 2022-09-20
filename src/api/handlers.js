import { rest } from "msw";
import db from "./db.json";

export const handlers = [
  // Handles GET products/:id request
  rest.get(`/products/:id`, (req, res, ctx) => {
    // mock findbyid in db
    const data = db.find((d) => d.id === req.params.id);
    return res(ctx.status(200), ctx.json(data));
  }),
];
