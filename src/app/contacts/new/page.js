"use client";
import Image from 'next/image';
import LogoutButton from '../../components/LogoutButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { withAuth } from '../../utills/withAuth';


const newContact = () => {
  const router = useRouter();

  const [contactData, setContact] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
  });

  //add new contact function
  const addContact = async (contactData) => {
    try {
      // Make a POST request to the login endpoint with user data
      const res = await fetch('http://localhost:3001/api/new/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify(contactData)
      });

      if (res.ok) {
        // Contact created successfully
        console.log('Contact created successfully');
        await router.push('/contacts', { replace: true });
      } else {
        // Handle error response
        const errorData = await res.json();
        console.log('Failed to create contact:', errorData.error);
      }
    } catch (error) {
      console.log('Failed to create contact:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(contactData);
  };


  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">
      <div className="w-full flex items-center relative bg-cover bg-[url('/images/ellipse2.svg')]">

        <div className="mx-auto">

          <div className="mt-[0rem] mb-[12rem]">
            <Image src="/images/twc-logo-white.svg" alt="Image" width={155} height={90} />
            <Image src="/images/contacts-portal-white.svg" alt="Image" width={255} height={90} />
          </div>

          <p className="text-white font-bold font-Futura text-7xl leading-12 mt-10 mb-5">New Contact,</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">

              <input
                className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 w-[40rem] placeholder-custom-color"
                type="text"
                name="fullName"
                placeholder="full name"
                value={contactData.fullName}
                onChange={handleInputChange}
                required
              />

              <input
                className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 w-[40rem] pl-14 placeholder-custom-color"
                type="email"
                name="email"
                placeholder="e-mail"
                value={contactData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 w-[40rem] pl-14 placeholder-custom-color"
                type="numb"
                name="phone"
                placeholder="phone number"
                value={contactData.phone}
                onChange={handleInputChange}
                required
              />

              <div className="flex flex-row gap-10 p-10">
                <label className="flex items-center">
                  <span className="font-Futura text-3xl">Gender</span>
                </label>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="mr-2 appearance-none bg-transparent border border-white w-6 h-6 rounded-full checked:bg-white checked:border-transparent"
                    value="male"
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="male" className="flex items-center">
                    <span className="font-Futura text-3xl font-medium">Male</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="mr-2 appearance-none bg-transparent border border-white w-6 h-6 rounded-full checked:bg-white checked:border-transparent"
                    value="female"
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="female" className="flex items-center">
                    <span className="font-Futura text-3xl font-medium">Female</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <button type="submit" className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white">
                add your first contact
              </button>
            </div>

            <LogoutButton />

          </form>

        </div>

      </div>

    </div>
  );
};

export default withAuth(newContact);
