import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        router.replace('/login');
      } else {
        setIsLoading(false);
      }
    }, []);

    if (isLoading) {
      // Render a loading state while checking for authentication
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
