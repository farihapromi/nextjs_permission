'use client';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const addDocumentsHandler = async () => {};
  return (
    <Button
      type='submit'
      className='bg-blue-400 flex gap-1 shadow-md text-white hover:text-white hover:bg-blue-500'
      onClick={addDocumentsHandler}
    >
      <Image src='/assets/icons/add.svg' height={24} width={24} alt='add' />
      <p className='hidden sm:block '>Start a Blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
