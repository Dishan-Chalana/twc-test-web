"use client";
import Image from 'next/image';
import React from 'react';
import LogoutButton from './components/LogoutButton';



export default function Home() {
  
  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">
      <div className="w-full flex relative bg-cover bg-[url('/images/ellipse2.svg')]">

        <div className="mx-auto mt-[10rem]">

          <div className=" mb-[10rem]">
            <Image src="/images/twc-logo-white.svg" alt="Image" width={155} height={90} />
            <Image src="/images/contacts-portal-white.svg" alt="Image" width={255} height={90} />
          </div>

          <p className="text-white font-bold font-Futura text-7xl leading-12  mb-5">Welcome,</p>

          <p className="text-white font-Futura text-4xl  leading-10 mb-8 mt-[2rem]">This is where your contacts live.Click the button below <br /> to add new contact.</p>

          <div className="flex items-center mt-10">
            <button className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white mt-[5rem] ">
              add your first contact
            </button>
          </div>

          <LogoutButton />

        </div>

      </div>

    </div>
  );
}
