import { setupWorker } from "msw";
import { handlers } from "./handlers";

// Service Worker with request handler to mock API calls
export const worker = setupWorker(...handlers);
