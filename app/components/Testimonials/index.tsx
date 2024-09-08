"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Chinonso Eze",
        profession: 'Managing Director, EzeTech Solutions, Lagos',
        comment: 'Techville transformed our digital presence with innovative solutions. Their professionalism and expertise are unmatched.',
        imgSrc: '/images/wework/avatar4.jpeg',
    },
    {
        name: "Fatima Bello",
        profession: 'Founder, Bello Creative Agency, Abuja',
        comment: 'The Techville team exceeded our expectations. Their creative approach and attention to detail helped us achieve our goals efficiently.',
        imgSrc: '/images/wework/avatar6.jpeg',
    },
    {
        name: "Adewale Johnson",
        profession: 'Chief Strategist, Johnson & Co., Ibadan',
        comment: 'Working with Techville was a great experience. Their technical skills and dedication to our project were truly impressive.',
        imgSrc: '/images/wework/avatar3.jpeg',
    },
    {
        name: "Titi Alabi",
        profession: 'CEO, Alabi Ventures, Port Harcourt',
        comment: 'Techville’s solutions have significantly enhanced our business operations. Their team is highly skilled and responsive.',
        imgSrc: '/images/wework/avatar5.jpeg',
    },
    {
        name: "Emmanuel Oke",
        profession: 'Director, Oke Technologies, Enugu',
        comment: 'The professionalism and creativity of Techville made a huge difference for us. They delivered high-quality results on time.',
        imgSrc: '/images/wework/avatar2.jpeg',
    },
    {
        name: "Zainab Ahmed",
        profession: 'Co-founder, Ahmed Innovations, Kano',
        comment: 'Techville provided exceptional service and support throughout our project. Their expertise and commitment were evident.',
        imgSrc: '/images/wework/avatar6.jpeg',
    },
]


// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Hear from Our Clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Discover what our clients are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See the feedback from our satisfied clients.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={64} height={64} className="inline-block m-auto absolute test-pos rounded-full" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
