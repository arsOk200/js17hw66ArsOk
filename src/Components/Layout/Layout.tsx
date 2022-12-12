import React, {PropsWithChildren} from 'react';
import NavBar from "../Nav-Bar/NavBar";

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className='mb-2'>
        <NavBar/>
      </header>
      <main className='container'>
        {children}
      </main>
    </>
  );
};

export default Layout;