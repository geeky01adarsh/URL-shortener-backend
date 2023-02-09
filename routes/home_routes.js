import express from 'express';
import path from 'path';

const homeRouter = express.Router();


homeRouter.get('/', (req, res) => {
    const __dirname = path.resolve();
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

export default homeRouter;