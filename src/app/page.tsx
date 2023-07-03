import Hero from "./components/hero";
import About from "./components/about";
import Learn from "./components/learn";
import News from "./news/page";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Learn />
      <News />
      <Newsletter />
    </>
  );
}
