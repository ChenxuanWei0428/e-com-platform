import React, { useState } from 'react';
import {
  SignUpCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { createClientForDefaultRegion } from "../libs/utils/util-aws-sdk.js";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async ({ clientId, username, password, email }) => {
    const client = createClientForDefaultRegion(CognitoIdentityProviderClient);
  
    const command = new SignUpCommand({
      ClientId: clientId,
      Username: username,
      Password: password,
      UserAttributes: [{ Name: "email", Value: email }],
    });
  
    return client.send(command);
  };  
  
  async function handleSubmit (event) {
    
    const params = {
      clientId: '386uvaijaa4j3m81p9bdju2uqe',
      password: password,
      username: "ttt",
      email: email
    };

    try {
      const data = signUp(params).promise();
      data.then(
        (result) => console.log(result),
        (err) => console.log(err)
      )
      await data
      console.log(data);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'User registered successfully.',
          userSub: data.UserSub,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
