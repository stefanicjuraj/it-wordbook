import TechBook from "../components/TechBook";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <TechBook />
      <ScrollToTop />
    </>
  );
}
