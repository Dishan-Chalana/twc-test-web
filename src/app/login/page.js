"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Login() {
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
    };

    return (
        <div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">

            {/* Left half */}
            <div className="w-full flex items-center relative bg-cover bg-[url('/images/ellipse1.svg')]" >

                <div className="w-2/3 lg:w-1/2  mx-auto">
                    <p className="text-white font-bold font-Futura text-7xl leading-12 mb-5">Hi there,</p>
                    <p className="text-white font-Futura font-medium text-4xl md:w-1/2 leading-10 mb-8">Welcome to our <br /> contacts portal</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 placeholder-custom-color"
                            type="email"
                            name="email"
                            placeholder="e-mail"
                            id="emailInput"
                            value={credentials.email}
                            onChange={handleInputChange}
                            required
                        />


                        <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 placeholder-custom-color"
                            type="password"
                            name="password"
                            placeholder="create password"
                            id="passwordInput"
                            value={credentials.password}
                            onChange={handleInputChange}
                            required
                        />

                        <div className="flex items-center mt-10">
                            <button className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white">
                                login
                            </button>

                            <p className="text-white text-3xl font-medium ml-4 leading-14">
                                or&nbsp;
                                <Link href="registration">
                                    <span className="text-white underline cursor-pointer">
                                        Click here to Register
                                    </span>
                                </Link>
                            </p>

                        </div>
                    </form>
                </div>
            </div>

            {/* Right half */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-20" >
                <Image src="/images/twc-logo.svg" alt="Image" width={255} height={90} />
                <Image src="/images/contacts-portal.svg" alt="Image" width={478} height={213} />
            </div>
        </div>
    );
}
