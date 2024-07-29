import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Nguemechia</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
