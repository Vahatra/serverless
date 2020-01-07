// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'tngnx4w82l'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-wmibpyzw.eu.auth0.com',            // Auth0 domain
  clientId: 'GmNWHMeFdCdgRwGPkgquvvXqERT7yz2R',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
