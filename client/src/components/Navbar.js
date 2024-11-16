import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaRibbon } from "react-icons/fa";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate("/");
      };

    const isActive = (path) => location.pathname === path;

    const handleScrollToAbout = () => {
        if (location.pathname !== "/") {
          // If not on the homepage, navigate first and then scroll
          navigate("/");
          setTimeout(() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 500);
        } else {
          // If on the homepage, directly scroll to the About section
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
    
    return(
        <nav className='bg-pink-600 shadow-lg py-4'>
            <div className='flex justify-between px-4 container mx-auto items-center'>
                <div>
                    <Link className='flex items-center text-xl font-bold' to="/">
                        <FaRibbon/>
                        <h1 className='text-white'>BreastCancer</h1>
                    </Link>
                </div>

                <div className='space-x-6'>
                    <Link to="/" className={`${ isActive("/") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Home</Link>
                    <button
                        onClick={handleScrollToAbout}
                        className={ "text-white hover:text-pink-200 cursor-pointer" } 
                    >
                        About
                    </button>
                    <Link to="/wall" className={`${ isActive("/wall") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Wall</Link>
                    <Link to="/resources" className={`${ isActive("/resources") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Resources</Link>
                </div>
            </div>
            

        </nav>
    )
}
export default Navbar