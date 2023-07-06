import Image from 'next/image';
import Link from 'next/link';

const newContact = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">
      <div className="w-full flex items-center relative bg-cover bg-[url('/images/ellipse2.svg')]">

        <div className="mx-auto">

          <div className="mt-[0rem] mb-[12rem]">
            <Image src="/images/twc-logo-white.svg" alt="Image" width={155} height={90} />
            <Image src="/images/contacts-portal-white.svg" alt="Image" width={255} height={90} />
          </div>

          <p className="text-white font-bold font-Futura text-7xl leading-12 mt-10 mb-5">New Contact,</p>

          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">

              <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 w-[40rem] placeholder-custom-color" type="text" name="fname" placeholder="full name" />

              <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 w-[40rem]  pl-14 placeholder-custom-color" type="email" name="email" placeholder="e-mail" />
            </div>

            <div className="flex flex-row gap-4">
              <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 w-[40rem]  pl-14 placeholder-custom-color" type="numb" name="phone" placeholder="phone number" />

              <div className="flex flex-row gap-10 p-10">
                <label className="flex items-center">
                  <span className="font-Futura text-3xl">Gender</span>
                </label>

                <div className="flex items-center">
                  <input type="radio" id="male" name="gender" className="mr-2 appearance-none bg-transparent border border-white w-6 h-6 rounded-full checked:bg-white checked:border-transparent" />

                  <label htmlFor="male" className="flex items-center">
                    <span className="font-Futura text-3xl font-medium">Male</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input type="radio" id="female" name="gender" className="mr-2 appearance-none bg-transparent border border-white w-6 h-6 rounded-full checked:bg-white checked:border-transparent" />

                  <label htmlFor="female" className="flex items-center">
                    <span className="font-Futura text-3xl font-medium">Female</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <button className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white">
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


          </form>

        </div>

      </div>

    </div>
  );
};

export default newContact;
