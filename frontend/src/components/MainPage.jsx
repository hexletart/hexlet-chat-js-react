import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`current location is ${JSON.stringify(location)}`);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={() => navigate('one', { replace: false })}>
              Page One
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('two', { replace: false })}>
              Page Two
            </button>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default MainPage;
