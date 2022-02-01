import Amplify, {Auth} from 'aws-amplify';
/**
 * A function that connects with aws cognito to signup and returns 
 * a promise that resolves into a session access token
 * @param {string} email 
 * @param {string} password 
 * @returns {string | false} The login session's access token on 
 * success and false on failure
 */
const username = "kunal" 
const given_name = "Kunal"
const family_name = "jain"

//we need to take above three values from the user and pass below.
//kunal123KUNAL! password used.

export default async function signup(email, password){
    try{
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email:email,
          given_name:given_name,
          family_name:family_name
        }
      });
      console.log(signUpResponse);
      //code for redirection to be added here.
    }
    catch(error) {
      let err = error.message ? error : { "message" : error };
      alert("Error Try Again : "+err);
    }
}