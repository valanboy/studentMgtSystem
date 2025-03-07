import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    //specifying the height of our navbar first
    <div className="h-[6vh] w-[100%]">
      {/* we will center the content of our navbar while making sure the width is 80% so it looks good*/}
      <div className=" mx-[0.8rem] my-[0.8rem]">
        {/* we will use flexbox to align the content of our navbar so that the logo, links and login will be inline and spaced evenly*/}
        <nav className="flex items-center justify-between text-[15px]  sm:text-[18px]">
          {/* logo */}
          <div className="Logo">
            <h1 className="text-[#714326] text-[20px] sm:text-[25px] select-none font-bold">SMS</h1>
          </div>
          {/* links */}
          <ul className="flex justify-between list-none text-[#714326] cursor-pointer">
            <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">Home</li>
            <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">About</li>
            <li className="p-[0.5rem] hover:text-[#422716] hover:text-[1.1rem]">Contact</li>
          </ul>
          {/* login button */}
          <Link to="/login">
          <button className="
          cursor-pointer text-[13px] sm:text-[15px] md:text-[18px] lg:text-[18px] py-3 text-[white]  border-none rounded-full px-[1.2rem] hover:text-[0.9rem] p-[0.75rem] bg-[#714326] font-semibold">
            Login
          </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
