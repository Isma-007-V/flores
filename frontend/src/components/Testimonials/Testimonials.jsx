
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Slider from 'react-slick'

const Testimonios = [
    {
        id: 1,
        name: "Sofia Bennett",
        description: "Beautiful flowers, fast delivery. Loved it!",
        image: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "Liam Rodriguez",
        description: "Great service and stunning bouquet!",
        image: "https://picsum.photos/200/301"
    },
    {
            id: 3,
            name: "Chloe Nakamura",
            description: "Perfect gift—so fresh and lovely!",
            image: "https://picsum.photos/200/302"
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed:500,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed:2000,
        cssEase: "linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite:true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide:2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
        
    };

  return (
    <div className='py-14 mb-10' id='testimonials'>
      <div className='container'>
        {/*encabezado*/}
        <div data-aos='fade-up' className='text-center mb-10'>
            <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                Testimonials 
            </h1>
        </div>
        {/* Slider */}
        <div data-aos = 'zoom-in'>
            <Slider {...settings}>
                {
                    Testimonios.map((data) => {
                        return <div className='my-6' key={data.id}> 
                        <div className='flex flex-col gap-4
                        shadow-lg py-8 px-6 mx-4 rounded-xl
                        bg-primary/10 relative'>
                            {/* fotografia*/}
                            <div className='mb-4'>
                                <img src={data.image} 
                                className='rounded-full w-20 h-20'/>
                            </div>
                            {/* nombre y descripcion*/}
                            <div className='flex flex-col items-center gap-4'> 
                                <div className='space-y-3'>
                                    <p className='text-xs text-gary-500'>{data.description}</p>
                                    <h1 className='text-xl font-bold 
                                    text-black/60 font-cursive'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                ,,
                            </p>
                        </div>
                        </div>;
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
