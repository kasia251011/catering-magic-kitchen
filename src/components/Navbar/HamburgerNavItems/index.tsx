import { ROUTES } from "@/utils/routes";
import Link from "next/link";

interface HamburgerNavItemsProps {
  closeNav: () => void;
}

const HamburgerNavItems = ({ closeNav }: HamburgerNavItemsProps) => {
  return (
    <div className="bg-white z-50 fixed w-full h-svh overflow-hidden lg:hidden ">
      <div className="flex flex-col gap-6 pt-10 pl-10 text-center container">
        {ROUTES.map(({ label, url }, index) => (
          <Link
            key={index}
            className="nav-link-dark"
            href={url}
            onClick={closeNav}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerNavItems;
