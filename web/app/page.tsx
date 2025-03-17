import WordBook from "../components/WordBook";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <WordBook />
      <ScrollToTop />
    </>
  );
}
