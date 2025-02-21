import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" />
          <span>ReactAdmin</span>
        </div>
        <div className="icons">
          <img src="/serach.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notifications">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img src="/user.webp" alt="" />
            <span></span>
          </div>
          <img src="/settings.svg" alt="" className="icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
