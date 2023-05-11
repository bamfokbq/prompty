import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
  title: 'Prompty',
  description: 'Discover & share AI prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <Provider>
        <body>
          {/* <div className='main'>
          <div className='gradient' />
        </div> */}

          <main>
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
