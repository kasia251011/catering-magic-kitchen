import Image from "next/image";
import Link from "next/link";
import ARROW_DOWN from "@/assets/icons/arrow-down.svg";
import IMAGE_BG from "@/assets/hero-bg.webp";
import Logo from "@/components/Logo";

const HeroSection = () => (
  <header className={`relative header  h-screen text-white `}>
    <div className="relative container h-full flex flex-col justify-around z-10">
      <div>
        <p className="font-sacramento text-4xl mt-20">Monika Kołucka</p>
        <h1>Catering</h1>
        <Logo variant="light" size="lg" />
        <div className="bg-primary rounded-md w-fit py-3 px-4 mt-4">
          <Link
            className="font-bold text-md sm:text-lg tracking-widest"
            href="tel:601-265-400"
          >
            tel. 601 265 400
          </Link>
        </div>
      </div>
      <div>
        <Link href="#usługi" className="flex flex-col items-center -mb-24">
          <Image
            className="w-3 animate-bounce"
            src={ARROW_DOWN}
            alt="strzałka w dół"
          />
          <p className="text-white mt-3 text-sm">Poznaj naszą ofertę</p>
        </Link>
      </div>
    </div>
    <Image
      src={IMAGE_BG}
      placeholder="blur"
      alt="Katering Monika Kołucka"
      className="absolute top-0 w-full h-full object-cover"
    />
    <div className="top-0 absolute w-full h-full bg-[#0000008f]" />
  </header>
);

export default HeroSection;
