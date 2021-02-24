import Footer from "./Footer";
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <html lang="en"></html>
      {children}
      <Footer />
    </div>
  );
}
