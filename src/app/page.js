import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';




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

          <div className="flex flex-row gap-4 fixed bottom-0 right-0 m-20">
            <Image src="/images/bx_log-out-circle.svg" alt="Image" width={60} height={90} />

            <p className="text-white text-3xl mt-4">
              <Link href="/" className="text-white underline cursor-pointer">
                logout
              </Link>
            </p>
          </div>


      </div>

    </div>

  </div>
  );
}
