const NavBar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between w-full grid grid-cols-2 items-center">
          <div className="logo">
            <img src={"image/logo.png"} alt="logo" />
          </div>
          <div>
            <ul className="type-none flex justify-between mr-40">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
