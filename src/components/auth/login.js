import Amplify, {Auth} from 'aws-amplify';
import { Button } from '@material-ui/core';

/**
 * A function that connects with aws cognito to loggin and returns 
 * a promise that resolves into a session access token
 * @param {string} email 
 * @param {string} password 
 * @returns {string | false} The login session's access token on 
 * success and false on failure
 */
export default async function login(email, password) {
    // Add your code here

}