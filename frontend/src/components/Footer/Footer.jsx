
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, } from 
'react-icons/fa6';

// eslint-disable-next-line no-unused-vars
import { GiPositionMarker } from "react-icons/gi";

import HeroImg from "../../assets/website/flores10.png"
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import miVideo from "../../assets/website/Technology_for_Life.mp4"

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  }, 
  {
    title: "Services",
    link: "/#services",
  }, 
   {
    title: "Premium Services",
    link: "/#banner",
  },
  {
    title: "Testimonials",
    link: "/#testimonials",
  },
  {
    title: "Downloads",
    link: "/#downloads",
  },
  {
    title: "Contact Us",
    link: "/#footer",
  },
];

const FooterLinksGI = [
  {
    title: "Our Story",
    
  }, 
  {
    title: "Flower Tips",
    link: "/#",
  }, 
  {
    title: "Stay Connected",
    link: "/#",
  },
];
const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};


const Footer = () => {
  const [openPopup, setOpenPopup] = useState(null);
  
  return (
    <div style={bgImage} className='text-white'id='footer'>
      <div className='bg-black/40 min-h-[400px]' >
        <div className='container grid md:grid-cols-3
        pb-20 pt-5'>
          {/*detalles*/}
          <div className='py-8 px-4'>
            <a href='#' className='font-semibold tracking-widest
            text-2xl sm:text-3cl font-cursive' > 
               Velázquez Flower Shop</a>
            <p className="pt-4">
            {" "}
            Love is the flower you’ve got to let grow.🌱 Making Every Occasion Bloom.
            </p>
            <a
            href='https://www.youtube.com/watch?v=VqQcU0WA5m8'
            target='_blank'
            className='inline-block bg-rock/70 py-2 
            px-4 mt-5 text-sm rounded-full'
            >
              Visit our Youtube Chanel

            </a>
          </div>

          {/* */}
          <div className='col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10'>
            {/*Primera columna*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold 
              sm:text-left mb-3">
              Explore
              </h1>
              <ul className='space-y-3'>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a className='inline-block hover:scale-105 duration-200'
                    href={data.link}>{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/*Segunda columna*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold 
              sm:text-left mb-3">
              Get Inspired
              </h1>
              <ul className='space-y-3'>
                {FooterLinksGI.map((data, index) => (
                  <li key={index}>
                    <a className='inline-block hover:scale-105 duration-200'
                    href={data.link}
                     onClick={() => setOpenPopup("modal2")}>{data.title}</a> 
                  </li>
                ))}
              </ul>
            </div>
            
            {/*Datos del negocio*/}
            <div className='py-8 px-4 col-span-2
            sm:col-auto'>
              <h1 className='text-xl font-semibold
              sm:text-left mb-3'>
                Address
              </h1>
              <div>
                <p className='mb-3'>1665 Main St, Santa Monica, CA 90401, EE. UU.</p>
                <p>+1 (408) 771-7916</p>

                {/*Redes sociales*/}
                <div className='space-x-3 mt-6'>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-3xl 
                  inline-block hover:scale-105 
                  duration-200" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="text-3xl 
                  inline-block hover:scale-105 
                  duration-200" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-3xl 
                  inline-block hover:scale-105 
                  duration-200" />
                </a>
                <a 
                onClick={() => setOpenPopup("modal1")}>
                  <GiPositionMarker className="text-3xl 
                  inline-block hover:scale-105 
                  duration-200" />
                </a>
                </div>

              </div>
            </div>
            {/*Modal nuevo*/}
            {
               openPopup === "modal1" && (
               <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
              >
   
               <div className="fixed inset-0 modal-overlay absolute w-full h-full bg-gray-900 opacity-50 "></div>
                {/*Modal blanca o chico */}
               <div className="modal-container bg-white max-h-[90vh] w-[90%] md:w-3/4 lg:w-1/2 max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto"onClick={(e) => e.stopPropagation()}>
               
                   <div className="modal-content py-4 text-left px-6">
                       <div className="flex justify-between items-center pb-3">
                           <p className="text-2xl font-bold text-black font-semibold tracking-widest
                                text-2xl sm:text-3cl font-cursive">Visit Our Location</p>
                           <div className="modal-close cursor-pointer z-50">
                               <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                   viewBox="0 0 18 18">
                                   <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
                               </svg>
                           </div>
                       </div>
                      
                       <div className="mt-16 lg:mt-20 ">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="rounded-lg overflow-hidden">
                              <iframe
                                className="w-[30rem] h-[30rem]"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.501837,34.001593,-118.481837,34.021593&layer=mapnik&marker=34.011593,-118.491837"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              > </iframe>
                              </div>
                              <div>
                                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                      <div className="px-6 py-4"> 
                                          <h3 className="text-lg font-medium text-gray-900 font-cursive">Our Address</h3>
                                          <p className="mt-1 text-gray-600">1665 Main St Santa Monica, CA 90401, EE. UU.</p>
                                      </div>
                                      <div className="border-t border-gray-200 px-6 py-4">
                                          <h3 className="text-lg font-medium text-gray-900 font-cursive ">Hours</h3>
                                          <p className="mt-1 text-gray-600">Monday - Friday: 10am - 6pm</p>
                                          <p className="mt-1 text-gray-600">Saturday: 11am - 5pm</p>
                                          <p className="mt-1 text-gray-600">Sunday: 11am - 5pm</p>
                                      </div>
                                      <div className="border-t border-gray-200 px-6 py-4">
                                          <h3 className="text-lg font-medium text-gray-900 font-cursive">Contact</h3>
                                          <p className="mt-1 text-gray-600">Email: flowershopvelazquez@gmail.com</p>
                                          <p className="mt-1 text-gray-600">Phone: +1 (408) 771-7916</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
   
                       <div className="mt-4 flex justify-end">
                           <button className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200 font-cursive"
                           onClick={() => setOpenPopup(null)}>close</button>                          
                       </div>

                   </div>
               </div>
   
               </div>
                
            )}

            {
              openPopup === "modal2" &&  (
              <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
              >

    
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                  
                    <div className="modal-content py-4 text-left px-6">
                        
                            <p className="text-2xl font-bold text-black">Modal Title</p>
                          
                                <div className="flex justify-center">
                                  <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                      <iframe
                                      className="w-full h-auto max-w-full overflow-auto rounded-t-lg controls"
                                      src={miVideo}
                                      type="video/mp4" 
                                      frameBorder={0}
                                      allow='autoplay; encrypted-media'
                                      allowfullscreen
                                      title='video'
                                    />
                                      <div className="p-6">
                                          <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
                                          <p className="text-gray-700 text-base mb-4">
                                              Some quick example text to build on the card title and make up the bulk of the 
                                              content.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                        <div className="mt-4 flex justify-end">
                            <button className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200"
                            onClick={() => setOpenPopup(null)}>Cancel</button>
                        </div>
                    </div>
                </div>

              </div>
            )}
            
          </div>

      </div>
    </div>
  </div>
  )
}

export default Footer
