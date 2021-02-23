import React from 'react';
import { OAuth2Client } from 'google-auth-library';
import http from 'http';
import url from 'url';
import open from 'open';
import destroyer from 'server-destroy';
import keys from '../secrets/oauth2.keys.json'

export function getAuthenticatedClient() : Promise<OAuth2Client> {
    return new Promise((resolve, reject) => {
        const oAuth2Client = new OAuth2Client(
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0]
        );

        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.profile'
        });

        const server = http.createServer(async (req : any, res : any) => {
            try {
                if (req.url.indexOf('/oauth2callback') > -1) {
                    const qs = new url.URL(req.url, 'http://localhost:3000').searchParams;
                    const code = qs.get('code');
                    console.log("Code is ", code);
                    res.end("Authentication successful! Please return to the console.")
                    server.destroy();
                    
                    // `code` is nullable and getToken does not like it.
                    const c = code ? code : "";
                    const r = await oAuth2Client.getToken(c);
                    oAuth2Client.setCredentials(r.tokens);
                    console.info("Tokens acquired.");
                    resolve(oAuth2Client);
                }
            } catch (e) {
                reject(e);
            }
        }).listen(3000, () => {
            open(authorizeUrl, {wait: false}).then(cp => cp.unref());
        })
        destroyer(server);    
    })
}