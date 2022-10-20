import express, { NextFunction, Request, Response } from "express";
import axios from "axios";
import cors from "cors";
//const cors = require('cors');
//const axios = require('axios');


const port = 3333;
const app = express();

app.use(cors());
app.get('/klines', async(req: Request, res: Response, next:NextFunction) => {
    const {symbol, interval} = req.query;
    if (!symbol || !interval) return res.status(422).send('Symbol and interval are required');
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=60`);
        res.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            res.status(500).json(error.response ? error.response.data : error.message);
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error ocurred';
        }
    }
});

app.listen(port, () => 'server running on port 3333');
