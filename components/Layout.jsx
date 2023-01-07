import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
      <link rel="apple-touch-icon" href="/icon" />
        <title>Ecommerce Store!</title>
        <link rel="icon" href="/manifest.json" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
