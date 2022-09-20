import { rest } from "msw";
import db from "./db.json";

export const handlers = [
  // Handles GET products/:id request
  rest.get(`/products/:id`, (req, res, ctx) => {
    console.log("req.params :>> ", req.params);
    // mock findbyid in db
    const data = db.find((d) => d.id === req.params.id);
    console.log("data :>> ", data);
    return res(ctx.status(200), ctx.json(data));
  }),
];
