import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <main>{children}</main>
    </html>
  );
};

export default RootLayout;
