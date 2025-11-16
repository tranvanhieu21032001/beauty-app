import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
