import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import ProductCard from "/src/components/ui/product-card/product-card";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper/core";
import { ProductSwiper } from "./styles";

SwiperCore.use([Mousewheel, Scrollbar]);
function Slider({ products, setSwiperRef }) {
  return (
    <ProductSwiper
      onSwiper={setSwiperRef}
      spaceBetween={12}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
    >
      {products &&
        products.length &&
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
    </ProductSwiper>
  );
}

export default Slider;
