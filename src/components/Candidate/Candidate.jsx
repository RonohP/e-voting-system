import React from 'react';
// import { Fragment } from 'react';
import { useCandidates } from "../../api/hooks/useCandidates";
import CandidateVoteCard from "../candidateVotecards/CandidateVoteCard";
import { Link} from 'react-router-dom';
import Software from '../../images/Software.svg';
import Data from '../../images/Data.svg';
import Cyber from '../../images/Cyber.svg';
import Product from '../../images/Product.svg';
import Management from '../../images/Management.svg';
import Logo from '../../images/WTLOGO.png';
import './Candidate.css';


export default function Candidate() {
 const { data: candidates } = useCandidates();

  const getImage = (school) => {
    let image = null;
    switch (true) {
      case school.includes("Data"):
        image = Data;
        break;
      case school.includes("Software"):
        image = Software;
        break;
      case school.includes("Management"):
        image = Management;
        break;
      case school.includes("Product"):
        image = Product;
        break;
      case school.includes("Cyber"):
        image = Cyber;
        break;
      default:
        image = null;
    }
    return image;
  };
 

  return (
    
        <section className='relative h-full align-center w-full'>
         <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
                        <Link to='/' className='flex flex-row pt-6'>
                            <img src={Logo} alt='WTLogo' className='w-12 h-11' />
                                <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
                            echsters University
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
           
         {candidates?.map((candidate) => {
          console.log(getImage("Data"), "get image");
        
            return (
              <CandidateVoteCard
                image={getImage(candidate?.school)}
                name={candidate?.firstName + " " + candidate?.lastName}
                jobTitle={candidate?.school}
                candidateInfo={candidate}
              />
            );
        })}
            
        </div>
        
     </section>
    
  );
}