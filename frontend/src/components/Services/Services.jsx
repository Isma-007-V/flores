/* eslint-disable no-unused-vars */
import React from 'react'
import Img2 from "../../assets/website/flores11.png"
import Img3 from "../../assets/website/flores6.png"
import Img4 from "../../assets/website/flores5.png"


const ServicesData = [
   { 
    id: 1,
    img: Img2,
    name: "Rosy Charm Basket",
    description: 
        "Vibrant pink gerberas and roses in a wicker basket. Cheerful and warm. ",
    aosDelay: "100",
   },
   { 
    id: 2,
    img: Img3,
    name: "Blush Elegance Bouquet",
    description: 
        "Soft pink roses and alstroemeria in a graceful, romantic arrangement. ",
    aosDelay: "300",
   },
   { 
    id: 3,
    img: Img4,
    name: "Pastel Paradise Mix",
    description: 
        "Cream roses contrasting with purple wildflowers. Diverse and harmonious. ",
    aosDelay: "500",
   },
];
const Services = () => {
  return (
    <>
    <span id='services'></span>
    <div className='py-10'>
      <div className='container'>
        {/* Titulo*/}
        <div data-aos="fade-up" className='text-center mb-20'>
            <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                Best flowers for you 
            </h1>
        </div>

        {/*Tarjetas de servicios*/}
        <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-14 md gap-5 place-items-center'>
            {
                ServicesData.map((data, index) => {
                    return(
                        <div 
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={index}
                        className='rounded-2xl bg-white hover:bg-primary hover:textwhite
                        shadow-xl duration-200 max-w-[300px] group relative '>
                           {/* Seccion de imagen*/}
                            <div className='h-[222px]'>
                                <img src={data.img} alt='' 
                                className='max-w-[200px] max-h-[200px] block mx-auto transform -translate-y-14 
                                group-hover:scale-110 
                                group-hover:rotate-6 duration-300 '/>
                            </div>

                            {/*Text content*/}
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{data.name}</h1>
                                <p className='text-gray-500 grpup-hover:text-white duration-300
                                text-sm line-clamp-2'>{data.description}</p>
                            </div>

                            </div>
                    )
            })
        }

            <div>

            </div>
        </div>

      </div>
    </div>
    </>

  );
};

export default Services
