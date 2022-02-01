import Amplify, {Auth} from 'aws-amplify';

/**
 * A function that connects with aws cognito to loggin and returns 
 * a promise that resolves into a session access token
 * @param {string} email 
 * @param {string} password 
 * @returns {string | false} The login session's access token on 
 * success and false on failure
 */
export default async function login(email, password) {
    
    try{
      const user= await Auth.signIn(email,password);
      console.log("New Login"+user);
    }

    catch(error) {
      let err = error.message ? error : { "message" : error };
      alert("Error Try Again : "+err);

    }

}