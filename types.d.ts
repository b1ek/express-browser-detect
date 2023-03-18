import WhichBrowser from "which-browser";

declare module "express-module" {
    export default function(req: Express.Request, res: Express.Response, next: any);
}

namespace Express {
    interface Request {
        browser?: WhichBrowser
    }
}