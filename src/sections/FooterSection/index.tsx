import Image from "next/image";
import Link from "next/link";

import FACEBOOK from "@/assets/icons/facebook.svg";
import MAIL from "@/assets/icons/mail.svg";
import PHONE from "@/assets/icons/call.svg";
import PERSON from "@/assets/icons/profile.svg";
import ADDRESS from "@/assets/icons/location.svg";
import Logo from "@/components/Logo";
import KJ_LOGO from "@/assets/kj-logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PropsWithChildren } from "react";

interface ContactProps extends PropsWithChildren {
  icon: StaticImport;
}

const Contact = ({ icon, children }: ContactProps) => (
  <div className="flex items-center text-xs">
    <Image className="w-4 opacity-70" src={icon} alt="Dane osobowe" />
    <div className="ml-4">{children}</div>
  </div>
);

const FooterSection = () => (
  <footer id="kontakt">
    <div className="bg-white">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-2">
        <div>
          <Logo size="sm" variant="dark" />
          <Link
            href="https://www.facebook.com/profile.php?id=100057828722637"
            target="_blank"
            className="bg-[#366BD9] my-5 flex text-white w-fit p-3 pr-5 rounded-md text-sm font-semibold"
          >
            <Image className="mr-3" src={FACEBOOK} alt="facebook" />
            Polub nas na facebooku
          </Link>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p className="mt-2 mb-5 text-xs">
            Skontakuj się w celu poznania aktulnej oferty dań.
          </p>
          <div className="flex flex-col gap-2">
            <Contact icon={PERSON}>
              <p>Monika Kołucka</p>
            </Contact>
            <Contact icon={PHONE}>
              <Link href="tel:601 265 400">601 265 400</Link>
            </Contact>
            <Contact icon={MAIL}>
              <Link href="mailto:magiczna.kuchnia@o2.pl">
                <p> magiczna.kuchnia@o2.pl</p>
              </Link>
            </Contact>
            <Contact icon={ADDRESS}>
              <address>Klewków, Łowicz</address>
            </Contact>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-t-gray-100 bg-white p-4 flex justify-center ">
      <Link href="https://kasia-jankowska-web.pl/" target="_blank">
        <Image
          src={KJ_LOGO}
          alt="Strony internetowe Katarzyna Jankowska"
          className="h-4 w-fit opacity-60"
        />
      </Link>
    </div>
  </footer>
);

export default FooterSection;
