import { CookieConsent } from "./components/CookieConsent";
import { Header } from "./sections/Header";
import { StickyFooter } from "./components/StickyFooter";
import { Main } from "./components/Main";
import { Footer } from "./sections/Footer";
import { Modal } from "./components/Modal";

export const App = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <CookieConsent />
      <Header />
      <StickyFooter />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
};
