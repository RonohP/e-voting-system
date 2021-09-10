import React from 'react';
// import { Fragment } from 'react';
import { Link} from 'react-router-dom';
import Software from '../../images/Software.svg';
import Data from '../../images/Data.svg';
import Cyber from '../../images/Cyber.svg';
import Product from '../../images/Product.svg';
import Management from '../../images/Management.svg';
import Logo from '../../images/WTLOGO.png';
import './Candidate.css';


export default function Candidate() {
  return (
    
        <section className='relative h-full align-center w-full'>
         <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
                        <Link to='/' className='flex flex-row pt-6'>
                            <img src={Logo} alt='WTLogo' className='w-12 h-11' />
                                <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
                            echsters Universisty
                             </p>
                         </Link>
        </nav>
        <div>
            <h1 className='text-5xl font-bold text-center mt-20 mx-52'>
            Women Techsters University Student Council 
            Electoral Candidates
            </h1>
            <p className='text-center mt-4 font-normal text-base mx-5'>
            Meet  the 2021 WTSC  Electoral Candidates , These Five Candidates have been verified by the WTSC Electoral board. 
            </p>
          </div>
          <div className="wrapper-flex">
            <div className="container">
                <img src={Software} alt='profile' class="profile-img"/>
                <h1 className="name">Kitan Babs </h1>
                <p className="description">Software Development</p>
                <button className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 mb-6 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}>View Details </button>
            </div>
            <div className="container">
                <img src={Data} alt='profile' class="profile-img"/>
                <h1 className="name">Layla Eman</h1>
                <p className="description">Data Science </p>
                <button className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 mb-6 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}>View Details </button>
            </div>
            <div className="container">
                <img src={Management} alt='profile' class="profile-img"/>
                <h1 className="name">Wawira Jacobs</h1>
                <p className="description">Product Management </p>
                <button className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 mb-6 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}>View Details </button>
            </div>
          </div>
          <div className="wrapper-flex">
            <div className="container">
                <img src={Cyber} alt='profile' class="profile-img"/>
                <h1 className="name">Abena Kwami </h1>
                <p className="description">Cyber Security </p>
                <button className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 mb-6 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}>View Details </button>
            </div>
            <div className="container">
              <div className='banner-img'></div>
                <img src={Product} alt='profile' class="profile-img"/>
                <h1 className="name">Zawadi Makena</h1>
                <p className="description">Product Design</p>
                <button className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 mb-6 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}} >View Details </button>
            </div>
            
          </div>
     </section>
    
  );
}