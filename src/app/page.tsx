import Hero from "@/app/components/Hero";
import Features from "./components/Features";
import Listings from "./components/Listings";
import Email from "./components/Email";
import Features1 from "./components/Features1";
import Listings2 from "./components/Listings2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Listings />
      <Listings2 />
      <Email />
      <Features1 />
      <br />
    </div>
  );
}