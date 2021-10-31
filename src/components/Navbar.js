import React, {useState} from "react";
import MobileNavbar from "./MobileNavbar";
import { ManLinks } from "../utils/ManInnerLink";
import { WomenLinks } from "../utils/WomenInnerLink";
import { KidLinks } from "../utils/KidInnerLink";
import { connect } from "react-redux";
import { openCart } from "../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Background from "../../src/assets/boots.jpg";
import Loupe from "../../src/assets/loupe.png";
import Avatar from "../../src/assets/avatar.png";
import Heart from "../../src/assets/heart.png";
import ShoppingCart from "../../src/assets/shopping-cart.png";

const Navbar = ({ cart }) => {
  // const [open, setOpen] = useState(false)
  return (
    <div className='max-w-2xl mx-auto px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='shadow-xs py-6 lg:py-10 z-30 relative'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='block lg:hidden'>
              <GiHamburgerMenu />
              {/* <MobileNavbar open={open}/> */}
            </div>
            <button className='cursor-pointer border-2 transition-colors border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:mr-8 group focus:outline-none'>
              <img
                src={Loupe}
                alt='loupe'
                className='w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden'
              />
            </button>
            <Link
              to='#'
              className='border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group hidden lg:block'
            >
              <img
                src={Heart}
                alt='heart'
                className='w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden'
              />
            </Link>
          </div>
          <Link to='/'>
            <h1>ReduxShoppyCart</h1>
          </Link>
          <div className='flex items-center'>
            <Link
              to='#'
              className='border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group'
            >
              <img
                src={Avatar}
                alt='avatar'
                className='w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden'
              />
            </Link>
            <Link
              to='#'
              onClick={() => cart()}
              className='border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group relative'
            >
              <img
                src={ShoppingCart}
                alt='avatar'
                className='w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden'
              />
              {/* <span className="absolute inset-top-px -inset-right-px"> 2 </span> */}
            </Link>
          </div>
        </div>
        <div className='justify-center lg:pt-1 hidden lg:flex'>
          <ul className='list-reset flex items-center'>
            <li className='mt-10'>
              <Link
                to='/'
                className='block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'
              >
                Home
              </Link>
            </li>
            <li className='mt-10'>
              <Link
                to='#'
                className='block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'
              >
                About
              </Link>
            </li>
            <li className='mt-10 hidden lg:block group'>
              <div className='border-b-2 border-white transition-colors group-hover:border-primary flex items-center'>
                <span className='cursor-pointer text-lg font-hk group-hover:font-bold text-secondary group-hover:text-primary px-2 transition-all'>
                  Collections
                </span>
                <BiChevronDown />
              </div>
              <div className='pt-10 absolute mt-40 top-0 left-0 right-0 z-50 w-2/3 mx-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'>
                <div className='transition-all flex bg-white shadow-lg p-8 rounded-b relative'>
                  <div className='flex-1 relative z-20'>
                    <h4 className='text-base text-secondary mb-2'>Man</h4>
                    <ul>
                      {ManLinks.map((link) => (
                        <li key={link.id}>
                          <Link key={link.id} className={link.className} to={link.to}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex-1 relative z-20'>
                    <h4 className='text-base text-secondary mb-2'>Woman</h4>
                    <ul>
                      {WomenLinks.map((link) => (
                        <li key={link.id}>
                          <Link key={link.id} className={link.className} to={link.to}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex-1 relative z-20'>
                    <h4 className='text-base text-secondary mb-2'>Kids</h4>
                    <ul>
                      {KidLinks.map((link) => (
                        <li key={link.id}>
                          <Link key={link.id} className={link.className} to={link.to}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <div
                      className='z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0'
                      style={{ backgroundImage: `url(${Background})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='mt-10'>
              <Link
                to='#'
                className='block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'
              >
                Blog
              </Link>
            </li>
            <li className='mt-10'>
              <Link
                to='#'
                className='block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'
              >
                FAQ
              </Link>
            </li>
            <li className='mt-10'>
              <Link
                to='#'
                className='block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cart: () => dispatch(openCart()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
