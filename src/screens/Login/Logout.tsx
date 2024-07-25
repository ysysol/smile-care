import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {

    navigate('/');
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
