import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-south-1_HoKVerlGS",
  ClientId: "35koa7hnatdu6sso4q752c5cn0",
};

export const UserPool = new CognitoUserPool(poolData);
