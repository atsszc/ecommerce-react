import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-8xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-4xl my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              minus facere. Odit, laboriosam ut. Ab consequuntur placeat sed
              unde dicta, deleniti reiciendis ea vel incidunt iure nesciunt
              assumenda, harum itaque!
            </div>
            <div className="border rounded-full cursor-pointer text-4xl w-[250px] h-20 flex items-center justify-center bg-gray-300">
              İncele
            </div>
          </div>
          <img
            className="w-[1000px]"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9586f004-25c7-4e72-bef9-6492f6491a4b/air-force-1-07-wb-ayakkab%C4%B1s%C4%B1-QLs4Hz.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-8xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-4xl my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              minus facere. Odit, laboriosam ut. Ab consequuntur placeat sed
              unde dicta, deleniti reiciendis ea vel incidunt iure nesciunt
              assumenda, harum itaque!
            </div>
            <div className="border rounded-full cursor-pointer text-4xl w-[250px] h-20 flex items-center justify-center bg-gray-300">
              İncele
            </div>
          </div>
          <img
            className="w-[1000px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
