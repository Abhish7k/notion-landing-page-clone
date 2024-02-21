import Link from "next/link";

const ActionButtons = () => {
  return (
    <div className="pr-4">
      <div className="flex justify-center items-center space-x-4">
        <Link
          href="/contact-sales"
          className="hidden lg:flex items-center hover:bg-gray-100 px-2 py-1.5 rounded-md"
        >
          Request a demo
        </Link>
        <div className="hidden lg:flex font-extralight text-gray-200 text-2xl">
          |
        </div>
        <Link
          href="/free"
          className="hidden lg:flex items-center rounded-md px-2 py-1.5 hover:bg-gray-100"
        >
          Log in
        </Link>
        <Link
          href="/contact"
          className="py-1.5 px-3 font-semibold text-sm bg-black text-white rounded-md hover:bg-gray-800"
        >
          Get Bird free
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
