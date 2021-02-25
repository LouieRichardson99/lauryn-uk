import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <html lang="en"></html>
      {children}
      <Footer />
    </div>
  );
}
