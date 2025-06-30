import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInpage = () => {
  return (
    <main className='auth-page min-h-screen flex items-center justify-center bg-gray-50'>
      <SignIn />
    </main>
  );
};

export default SignInpage;
