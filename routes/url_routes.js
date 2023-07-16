import express from 'express';
import { nanoid } from "nanoid";
import Link from '../models/link.js';
import { validateLink } from '../utils/validator.js';
const linkRouter = express.Router();
const baseURL = process.env.BASE_URL;

// create an url
linkRouter.post('/', async (req, res) => {
    const { longURL } = req.body;
    const validLink = await validateLink(longURL);
    if (!validLink) {
        res.send("You entered a wrong URL");
        return;
    }
    const existURL = await Link.findOne({ link: longURL });
    if (existURL) {
        const shortenURL = baseURL + existURL[0].shorten_link;
        res.statusMessage(200).send(shortenURL);
        return;
    }
    let shortURL;
    while (!shortURL) {
        shortURL = nanoid(4);
        let existsURL = await Link.find({ shorten_link: shortURL });
        if (!existsURL) break;
    }
    const newLink = new Link({
        link: longURL,
        shorten_link:shortURL
    })
    try {await newLink.save(); } catch(err) {
        console.error(err)
    }
    res.send(baseURL+shortURL);
})

// redirect to the base url
linkRouter.get('/:id', async (req, res) => {
    console.log(req.params.id)
    const shortURL = req.params.id;
    const existsURL = await Link.find({ shorten_link: shortURL });
    if (!(existsURL).length) {
        res.send("No such URL found");
        return;
    }
    res.redirect(existsURL[0].link);
})

export default linkRouter;