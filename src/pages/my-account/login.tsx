import { NextPage } from "next";
import Head from "next/head";

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Account | Login</title>
        <meta name="description" content="Login to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login</h1>
    </div>
  )
}

export default LoginPage