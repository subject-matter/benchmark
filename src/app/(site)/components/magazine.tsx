//@ts-nocheck
'use client';

import { useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



export default function Sample() {


  return (
    <div className="mx-[10px] mb-[100px]  bg-white h-full ">
      <h1 className="w-full py-24 pb-12 text-sm-3xl font-medium lg:pb-24 lg:pt-0 lg:text-xl ">
        Magazine
      </h1>
      <div
        className="flex flex-col justify-center lg:w-full"
       
      >
       
        <div className="text-center">
        <iframe allowfullscreen="allowFullScreen" scrolling="no" class="fp-iframe" style={{ border: '0px', width: '100%', height: '80vh' }} src="https://heyzine.com/flip-book/b6766da17b.html"></iframe>
         
        </div>
      </div>
    </div>
  );
}
