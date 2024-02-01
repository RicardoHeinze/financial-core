"use client";

import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.AWS_COGNITO_POOL_ID ?? "",
      userPoolClientId: process.env.AWS_COGNITO_APP_CLIENT_ID ?? "",
    },
    // region: process.env.AWS_COGNITO_REGION,
  },
});

export function Login({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);
