import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logos/bird-logo.png"
        alt="logo"
        height={150}
        width={150}
        className="w-24"
      />
    </div>
  );
};

export default Logo;
