import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export default function LogoutButton() {
  const router = useRouter();

  // Function to handle user logout
  const logoutUser = () => {
    Cookies.remove("token");
    router.replace("/login"); // Redirect the user to the login page
  };

  return (
    <div className="flex flex-row gap-4 fixed bottom-0 right-0 m-20">
      {/* Logout button */}
      <Image src="/images/bx_log-out-circle.svg" alt="Image" width={60} height={90} />
      <p className="text-white text-3xl mt-4">
        <Link href="/login" className="text-white underline cursor-pointer" onClick={logoutUser}>
          logout
        </Link>
      </p>
    </div>
  );
}
