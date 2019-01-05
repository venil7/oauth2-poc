import ClientOAuth2 from 'client-oauth2';
import { Dispatch } from 'react';

export type Action = string | ((d: React.Dispatch<Action>) => void);
export const API_CALL = "api/call";
export const authenticate = (history: any) => async (dispatch: Dispatch<Action>) => {
  const githubAuth = new ClientOAuth2({
    clientId: 'abc',
    authorizationUri: 'https://github.com/login/oauth/authorize',
    redirectUri: 'http://example.com/auth/github/callback',
    scopes: ['notifications', 'gist']
  });
  try {
    const uri = githubAuth.token.getUri();
    window.location.href = uri;
    // const token = await githubAuth.token.getToken(uri);
    // console.log(JSON.stringify(token, null, 2));
  } catch (err) {
    console.error(err);
  }
};
