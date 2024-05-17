import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  height: calc(100vh - 233px);

  .swiper-wrapper {
    display: grid;
    gap: 10px;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
