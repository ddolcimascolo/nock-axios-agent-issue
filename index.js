'use strict';

const https = require('https');
const axios = require('axios');
const nock = require('nock');

async function run() {
    return axios.get('https://self-signed.badssl.com/', {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
}

run().then(res => {
    console.log(res.data)
});
