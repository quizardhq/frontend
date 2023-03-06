import React from 'react';
import Header from '../ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
