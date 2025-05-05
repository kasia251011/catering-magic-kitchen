interface LogoProps {
  variant: "light" | "dark";
  size: "sm" | "md" | "lg";
}

const Logo = ({ variant, size }: LogoProps) => (
  <p
    className={`font-galada font-normal ${
      size === "lg" ? "text-5xl" : size === "md" ? "text-4xl" : "text-lg"
    } ${variant === "light" ? "text-white" : "text-text-dark"} font-bold`}
  >
    <span
      className={`${variant === "light" ? "text-white" : "text-text-dark"} `}
    >
      Magiczna{" "}
    </span>
    <span className=" text-primary">Kuchnia</span>
  </p>
);

export default Logo;
