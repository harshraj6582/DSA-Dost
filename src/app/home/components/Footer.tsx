import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import FooterImage from '../../../../public/footer.png';

function Footer() {
  return (
    <div>
      <div className='h-30'></div>
    <div className="bg-cover bg-center text-center py-20" style={{ backgroundImage: `url(${FooterImage.src})` }}>
      <h2 className="text-xl font-semibold mb-4 pb-10">Connect with me :</h2>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/harsh-raj-15321624a/" target="_blank" className="flex items-center">
          <FaLinkedin size={32} color='gray' />
         
        </a>
        <a href="https://github.com/harshraj6582" target="_blank" className="flex items-center ">
          <FaGithub size={32}  color='gray' />
       
        </a>
       
          <FaInstagram size={32}  color='gray' />
        
      </div>
    </div>
    </div>
  );
}

export default Footer;
