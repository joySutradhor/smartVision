import React from "react";
import "./PhotoGallery.css";
// import media1 from "../../../assets/images/media1.png";
// import media2 from "../../../assets/images/media2.png";
// import media3 from "../../../assets/images/media3.png";
// import media4 from "../../../assets/images/media4.png";
// import media5 from "../../../assets/images/media5.png";
// import media6 from "../../../assets/images/media6.png";
// import media8 from "../../../assets/images/media8.png";
// import media9 from "../../../assets/images/media9.png";
import galleryOne from "../../../assets/images/mediaImg/galleryOne.jpg";
import galleryTwo from "../../../assets/images/mediaImg/galleryTwo.jpg";
import galleryThree from "../../../assets/images/mediaImg/galleryThree.jpg";
import galleryFour from "../../../assets/images/mediaImg/galleryFour.jpg";
import galleryFive from "../../../assets/images/mediaImg/galleryFive.jpg";
import gallerySix from "../../../assets/images/mediaImg/gallerySix.jpg";
import gallerySeven from "../../../assets/images/mediaImg/gallerySeven.jpg";
import galleryEight from "../../../assets/images/mediaImg/galleryEight.jpg";
import galleryNine from "../../../assets/images/mediaImg/galleryNine.jpg";
import galleryTen from "../../../assets/images/mediaImg/gelleryTen.jpg";
import mediaNew1 from "../../../assets/images/mediaImg/mediaNew1.png";
import mediaNew2 from "../../../assets/images/mediaImg/mediaNew2.png";
import mediaNew3 from "../../../assets/images/mediaImg/mediaNew3.png";
import mediaNew4 from "../../../assets/images/mediaImg/mediaNew4.png";
import mediaNew5 from "../../../assets/images/mediaImg/mediaNew5.png";
import mediaNew6 from "../../../assets/images/mediaImg/mediaNew6.png";
import mediaNew7 from "../../../assets/images/mediaImg/mediaNew7.png";
import mediaNew8 from "../../../assets/images/mediaImg/mediaNew8.png";
import mediaNew9 from "../../../assets/images/mediaImg/mediaNew9.png";
import mediaNew10 from "../../../assets/images/mediaImg/mediaNew10.png";

import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";


const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      img: galleryOne,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 2,
      img: galleryTwo,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 3,
      img: galleryThree,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 4,
      img: galleryFour,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 5,
      img: galleryFive,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 6,
      img: gallerySix,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 7,
      img: gallerySeven,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 8,
      img: galleryEight,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 9,
      img: galleryNine,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 10,
      img: galleryTen,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 11,
      img: mediaNew1,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 12,
      img: mediaNew2,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 13,
      img: mediaNew3,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 14,
      img: mediaNew4,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 15,
      img: mediaNew5,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 16,
      img: mediaNew6,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 17,
      img: mediaNew7,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 18,
      img: mediaNew8,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 19,
      img: mediaNew9,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },
    {
      id: 20,
      img: mediaNew10,
      location: "Location Name",
      des: "At Smart Vision, we provide quality Midterm and endline evaluation services.",
    },

  
    
    
  ];

  // slider sttings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="sectionGap">
      <h1 className="text-center">Photo Gallery</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 containe">
        {photos.map((photo) => (
          <div className="col  d-none d-md-block" key={photo.id}>

            <div className="myCard  ">
              <img src={photo.img} className="img-fluid photo-gellery-img" alt="..." />
              {/* <div className="details text-center px-4 py-2">
                <h3 className="my-1 my-md-3">{photo.location}</h3>
                <p className="text-center mb-3">{photo.des}</p>
              </div> */}
            </div>

          </div>
        ))}
      </div>

      {/* photo gallary slider */}
      <div className="slider-container px-4 mx-3 d-md-none d-block">
        <Slider {...settings}>
          {/* card 1 start */}
          {photos.map((photo) => (
            <div className="px-1" key={photo.id}>
              <div className="slider-myCard ">
                <img src={photo.img} className="img-fluid" alt="..." />
                {/* <div className="slider-details">
                  <h6>{photo.location}</h6>
                  <p className="w-75 mx-auto">{photo.des}</p>
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="arrow-button-chooseUs" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomNextArrow = (props) => (

  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="arrow-button-chooseUs2" src={sliderBtnRight} alt="" />
  </div>
);

export default PhotoGallery;
