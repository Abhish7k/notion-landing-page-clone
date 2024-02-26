import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import HeroSection from "./(sections)/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
