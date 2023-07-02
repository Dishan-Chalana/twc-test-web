import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row" style={{ backgroundImage: 'url("/images/bg-pattern.svg")' }}>
      
      {/* Left half */}
      <div className="w-full flex items-center relative" style={{ backgroundImage: 'url("/images/ellipse1.svg")', backgroundSize: 'cover' }}>
        <div className="w-2/3 lg:w-1/2  mx-auto">
          <p className="text-white font-bold font-Futura text-7xl leading-12 mb-5">Hi there,</p>
          <p className="text-white font-Futura font-medium text-4xl md:w-1/2 leading-10 mb-8">Welcome to our <br /> contacts portal</p>

          <form action="" className="flex flex-col gap-4">

            <input className="p-2 mt-8 rounded-xl border text-3xl font-medium text-gray-600 font-Futura" type="email" name="email" placeholder="e-mail" style={{ width: '35vw', height: '8vh', padding: '4px 0px 3px 55px', borderRadius: '50px', border: '1px solid', color: '#083F46' }} />
            <div className="relative">
              <input className="p-2 mt-5 rounded-xl border text-3xl font-medium text-gray-600 font-Futura" type="password" name="password" placeholder="password" style={{ width: '35vw', height: '8vh', padding: '4px 0px 3px 54px', borderRadius: '50px', border: '1px solid' }} />
            </div>

            <div className="flex items-center mt-10">
              <button className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300" style={{ width: '9vw', height: '6vh', borderRadius: '50px', border: '1px solid #FFFFFF' }}>
                login
              </button>

              <p className="text-white text-3xl font-medium ml-4 leading-14">
                or &nbsp;<a href="#" className="text-white"><u>Click here to Register</u></a>
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
