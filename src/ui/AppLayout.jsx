import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == 'loading';
  return (
    <div className="main grid h-screen grid-rows-[auto_1fr_auto] gap-x-4">
      {isLoading && <Loader />}
      <Header />

      <div className="flex min-h-[80vh] items-center justify-center overflow-scroll">
        <main className="mx-auto max-w-3xl rounded-xl px-2 py-1">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
