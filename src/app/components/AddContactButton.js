import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AddContactButton() {
  const router = useRouter();

  // Function to handle button click
  const handleClick = () => {
    const token = Cookies.get('token');
    if (token) {
      // User is logged in, navigate to the contacts page
      router.push('/contacts');
    } else {
      // User is not logged in, redirect to the login page
      router.push('/login');
    }
  };

  return (
    <div className="flex items-center mt-10">
      <button
        className="bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 w-9vw h-6vh border border-white mt-[5rem]"
        onClick={handleClick}
      >
        Add your first contact
      </button>
    </div>
  );
}
