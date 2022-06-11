import Herder from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Herder />
      <main className="flex-1 bg-base-200">
        <div className="container max-w-screen-lg my-6">{children}</div>
      </main>
      <Footer />
    </>
  );
}
