/*"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checkUserRole } from '../utils/auth';

const withRoleAccess = (WrappedComponent, allowedRoles) => {
  return function WithRoleAccess(props) {
    const router = useRouter();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
      // Simulate fetching user role (replace with actual logic)
      const fetchUserRole = async () => {
        // Replace this with actual user role fetching logic
        const role = 'Student'; // Simulating a Student role
        setUserRole(role);
        console.log('User role:', role);
      };

      fetchUserRole();
    }, []);

    useEffect(() => {
      if (userRole && !checkUserRole(userRole, allowedRoles)) {
        console.log('Access denied. Redirecting to unauthorized page...');
        router.push('/unauthorized');
      }
    }, [userRole, router]);

    if (!userRole) {
      return <div>Loading...</div>; // Or any loading indicator
    }

    if (!checkUserRole(userRole, allowedRoles)) {
      console.log('Rendering null due to unauthorized access');
      return null; // This will be briefly shown before redirect
    }

    console.log('Rendering authorized component');
    return <WrappedComponent {...props} />;
  };
};

export default withRoleAccess;*/
