import express, { Request, Response } from "express";
import router from "#/router/index";

const app = express();
const PORT = 1001;

router(app);

app.listen(PORT, () => {
    console.info(`########################################
✌️  Server listening on port: ${PORT} ✌️
########################################`);
});
