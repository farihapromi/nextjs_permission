import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';

const Document = () => {
  return (
    <div>
      <Header className='mt-8'>
        <div className=' flex items-center justify-center gap-2 '>
          <p className='document-title'>Shared </p>
        </div>
        {/* authentication */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
