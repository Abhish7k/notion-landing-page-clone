import ActionButtons from "./_components/ActionButtons";
import Logo from "./_components/Logo";
import Menu from "./_components/Menu";

const Navbar = () => {
  return (
    <div className="h-16 top-0 sticky z-50 flex justify-between items-center bg-white border-b border-gray-200">
      <div className="flex justify-center items-center">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
