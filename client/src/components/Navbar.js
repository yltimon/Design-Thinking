import { useLocation, Link } from 'react-router-dom';
import { FaRibbon } from "react-icons/fa";

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    
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
                    <Link to="/assess" className={`${ isActive("/assess") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Assess</Link>
                    <Link to="/tools" className={`${ isActive("/tools") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Tools</Link>
                    <Link to="/resources" className={`${ isActive("/resources") ? "text-pink-300" : "text-white"} hover:text-pink-200`}>Resources</Link>
                </div>
            </div>
            

        </nav>
    )
}
export default Navbar