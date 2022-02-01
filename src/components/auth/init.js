import Amplify from "aws-amplify";
import config from "./config";

export default function init() {
  Amplify.configure({
    Auth: {
      mandatorySignId: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
  });
}