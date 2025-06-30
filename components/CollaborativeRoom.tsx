'use client';
import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
const CollaborativeRoom = () => {
  return (
    <RoomProvider id='my-room'>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className='collaborative-room'>
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
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
