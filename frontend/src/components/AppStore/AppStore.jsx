
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import BgPng from "../../assets/website/fondoF15.jpg"
// eslint-disable-next-line no-unused-vars
import AppStoreImg from "../../assets/website/app_store.png"
// eslint-disable-next-line no-unused-vars
import PlayStoreImg from "../../assets/website/play_store.png"
// eslint-disable-next-line no-unused-vars
import work from "../../assets/website/work.png"
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "50vh", 
  width: "100%",
};

const AppStore = () => {
  const [openPopup, setOpenPopup] = useState(false)
  return (
    <div className="relative " id='downloads' style={backgroundStyle}>
      <div 
        className="absolute inset-0 bg-black/40" 
      />
      <div className="container relative h-full mx-auto px-4">
        <div className="flex h-full items-center">
          <div data-aos = 'fade-up' className="w-full md:w-3/4 lg:w-1/2">
            {/* text section */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Floreria Velazquez is available for Android and IOS
            </h1>
            
            {/* img section */}
            <div className="flex flex-wrap sm:justify-start items-center gap-4">
              <a 
              className="transition-transform hover:-translate-y-1"
              onClick={()=>setOpenPopup(true)}>
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="w-[140px] md:w-[160px]" 
                />
              </a>
              <a 
              className="transition-transform hover:-translate-y-1"
              onClick={()=>setOpenPopup(true)}>
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="w-[140px] md:w-[160px]" 
                />
              </a>

            

            </div>
            
          </div>
          {
                openPopup &&
                <div 
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={() => setOpenPopup(false)}
                  >
                    <div 
                      className="rounded-md p-4 bg-white max-w-md w-[90%] md:w-2/3 lg:w-1/2"
                      onClick={(e) => e.stopPropagation()}
                      data-aos="zoom-in"
                      data-aos-duration="300"
                    >
                      <div className="flex flex-row justify-between font-bold font-cursive">
                        <h2>Mobile Application </h2>
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                      onClick={() => setOpenPopup(false)}>
                      Close
                      </button>
                      </div>
                      <p className="text-xl font-bold font-cursive">Coming soon</p>
                      <img src={work} alt="Descripción" className="mx-auto mt-4" />
                    </div>
                  </div>
                }
        </div>
        
      </div>
      
    </div>
    
  );
};

export default AppStore;