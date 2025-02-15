import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DivForGallery, StyledImage } from "./styles";

const images = [
    '/img/gallery/1.jpg',
    '/img/gallery/2.jpg',
    '/img/gallery/3.jpg',
    '/img/gallery/4.jpg',
    '/img/gallery/5.jpg',
]

const Gallery = ({ id } : {id : string}) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <DivForGallery id={id}>   
      {/* <Row justify={"center"}>
        <Col span={8} ></Col>
        <Col span={8} ><h2 color="white">Gallery</h2></Col>
        <Col span={8} ></Col>
      </Row> */}
      <h2 color="white">Gallery</h2>
      
      <Slider {...settings}>
        {images.map((item, index) => (
            <StyledImage src={item} alt="hospital photo"  />
        ))}
      </Slider>
    </DivForGallery>
  );
};

export default Gallery;