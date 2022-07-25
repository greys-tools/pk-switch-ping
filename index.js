require('dotenv').config() //load env
const express = require('express');
const axios = require('axios');

axios.defaults.baseURL = 'https://discord.com/api/v10'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
        return res.status(200).send(`
                <h1>Hi there</h1>
                <p>
                  This is a small server for a simple task.
                  It's not really that interesting, but thanks for
                  checking out out anyway :)
                </p>
        `);
})

app.post('/', async (req, res) => {
        if(!req.body) return res.status(400).send();
        if(req.body.signing_token !== process.env.PK_SECRET) return res.status(401).send();
        if(req.body.type !== 'CREATE_SWITCH') return res.status(400).send();

        await axios.post(`/channels/${process.env.CHANNEL}/messages`, {
                content: `<@${process.env.USER}>\n` +
                        `Here's some text you can put to ` +
                        `tell your headmates why they're getting pinged`
        }, { headers: { Authorization: `Bot ${process.env.TOKEN}` }})

        return res.status(200).send();
})

app.listen(process.env.PORT ?? 8080);
console.log('Server listening...')