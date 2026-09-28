import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn afterSignInUrl="/" />
}

export default SignInPage