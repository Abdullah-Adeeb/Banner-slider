// // AT FIRST Run these two command in the terminal 
// // npm i react-slick
// //npm install slick-carousel


// // AFter this Run these commands in the terminal
// //npm install react-slick --save
// //npm install slick-carousel --save

// //THEN IMPORT

// import React, { useState } from "react"; //import USESTATE
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css"; 

// // import these three
// const banner = "/src/assets/banner.png";  // import image

// const Banner = () => {
//   let [active, setActive] = useState(0);

//   const settings = { //settings for the slider
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (prev, next) => {
//       setActive(next);
//     },
//     appendDots: (dots) => (   // code for dots animation
//       <div
//         style={{
//           position: "absolute",
//           right: "43.5%",
//           top: "60%",
//           transform: "translateY(-50%)",
//           zIndex: 10,
//         }}
//       >
//         <ul style={{ margin: "0px", listStyle: "none", padding: 0 }}>
//           {dots[active]}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (  // code for custom paging
//       <div
//         style={{
//           fontWeight: "bold",
//           fontSize: "18px",
//           color: i === active ? "#262626" : "rgba(0, 0, 0, 0.3)",
//           borderRight: i === active ? "4px #262626 solid" : "none",
//           padding: "20px 40px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "40px",
//           height: "150px",
//           textAlign: "center",
//         }}
//       >
//         0{i + 1}
//       </div>
//     ),
//   };

//   return (
//     <div className="w-full min-h-[500px] flex items-center relative">
//       {/* <Slider {...settings} className="w-full">  // use slider settings to use slider 
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="flex items-center justify-center">
//             <img src={banner} alt="banner" className="object-cover w-full h-auto" />
//           </div>
//         ))}
//       </Slider> */}
//     </div>
//   );
// };

// export default Banner;
