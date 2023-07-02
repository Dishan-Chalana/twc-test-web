import Image from 'next/image';
import Link from 'next/link';

const registration = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">

      {/* Left half */}
      <div className="w-full flex items-center relative bg-cover bg-[url('/images/ellipse1.svg')]" >

        <div className="w-2/3 lg:w-1/2  mx-auto">
          <p className="text-white font-bold font-Futura text-7xl leading-12 mb-5">Register Now,</p>

          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 placeholder-custom-color" type="email" name="email" placeholder="e-mail" />

            <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 placeholder-custom-color" type="password" name="password" placeholder="create password" />

            <input className="p-2 mt-5 rounded-full border text-3xl font-bold text-custom-color font-Futura h-28 pl-14 placeholder-custom-color" type="password" name="password" placeholder="confirm password" />

            <div className="flex items-center mt-10">
              <button className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white">
                register
              </button>
            </div>

            <p className="text-white text-3xl font-medium ml-4 mt-20 leading-14">
              <Link href="/" className="text-white underline cursor-pointer " >
                &lt; Back to login
              </Link>
            </p>
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
};

export default registration;
