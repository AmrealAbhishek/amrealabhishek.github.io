// Example.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import './Example.css'; // Import your custom styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Example(props) {
    var items = [
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-1.png?raw=true"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-4.png?raw=true"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-2.png?raw=true"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-3.png?raw=true"
        },
        {
            imagePath: "https://vitchennaievents.com/certificates/generate.php?c=Vjg2WFdHT1ZETHdLdlgwblhhUHU4SlY4VTFaWHVpOHUrUFZBSzZROEdHekVaT05lbUJ5clNQUUxFU0R1UURiLytWSHpRUUFzMnoxZ1hQTFJ6Y2g4bnVDakUxT2U4T05CWkJvVkN1VHkwNStsV3ZPdEo0SFo2dkdMN2tTdk5DZ2piZDBWZDN4TklmVHk3c05rbUpLdytTTDVBVkdzb3RDRFRobGlyMDMxR3pDaXB3Z2l3STJYcE95MnNBMFI5T1JrVkxaekpqOTlIM0tVbDN1MGIzanhDbnpHbW9ueXJmclBqSnBxaWpYR2lSRTZFNjBCaXFNY1pjbkFjeXAxbVNmOHNNTW9GVVQyQml2Zy85TE8rZEhEOXBLb3d6eXdaOWlDSEowS2hrRTh3U2M9"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-1.png?raw=true"
        },
        {
            imagePath: "https://media.licdn.com/dms/image/D5622AQFNzCy__JUEhQ/feedshare-shrink_800/0/1712234137583?e=1718236800&v=beta&t=1jLsZN4BNP9hvdp6BkTpsiMX2G7dN7m8BhzfwGHXzwc"
        },
        {
            imagePath: "https://raw.githubusercontent.com/AmrealAbhishek01/test/main/1111.jpeg"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/rize.png?raw=true"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/cc.png?raw=true"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/CCIO-3.png?raw=true"
        },
        {
            imagePath: "https://raw.githubusercontent.com/AmrealAbhishek01/test/main/1111.jpeg"
        },
        {
            imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/PWD.jpeg?raw=true"
        },
        // {
        //     imagePath: "https://raw.githubusercontent.com/AmrealAbhishek01/test/main/WhatsApp%20Image%202023-12-27%20at%2023.51.57.jpeg"
        // },
        // {
        //      imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/PWD1.jpeg?raw=true"
        // },
        
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/ss.jpeg?raw=true"
        // },
        
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/ss.jpeg?raw=true"
        // },
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/WhatsApp%20Image%202023-09-07%20at%209.02.37%20PM.jpeg?raw=true"
        // },
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/WhatsApp%20Image%202023-09-07%20at%209.07.39%20PM.jpeg?raw=true"
        // },
        {
            imagePath: "https://raw.githubusercontent.com/AmrealAbhishek01/test/main/hacked.jpeg"
        },
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/sss.jpeg?raw=true"
        // },
        // {
        //     imagePath: "https://github.com/AmrealAbhishek01/test/blob/main/PWD.jpeg?raw=true"
        // }
        
        // Add more image objects as needed
    ];

    const settings = {
        
        autoplay: true,
        autoplaySpeed: 2000,
        
        
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of items to show at once
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {items.map((item, i) => (
                <div key={i} className="slick-slide">
                    <img src={item.imagePath} alt="" className="slick-image" />
                </div>
            ))}
        </Slider>
    );
}

export default Example;