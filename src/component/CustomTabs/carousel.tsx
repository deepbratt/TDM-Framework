import React, { useState, FC,  useRef } from "react";
import {  SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";
import { CustomCarouselProps } from "../../../types";


const CustomCarousel: FC<CustomCarouselProps> = ({renderItems,listItems,
  layout,
  layoutCardOffset,
  autoplay,
  loop,
  enableMomentum,
  enableSnap,
  autoplayDelay,
  sliderWidth,
  activeAnimationType,
  itemWidth,
  inactiveSlideScale,
  inactiveSlideOpacity,
  autoplayInterval,
contentContainerCustomStyle,
containerCustomStyle,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState(listItems);
  const ref = useRef(null);


  

  return (
    <SafeAreaView style={{ flex: 1,  flexDirection: "row", justifyContent: "center" }}>
      <Carousel
        layout={layout}
        layoutCardOffset={layoutCardOffset}
        ref={ref}
        autoplay={autoplay}
        loop={loop}
        autoplayDelay={autoplayDelay}
        enableMomentum={enableMomentum}
        enableSnap={enableSnap}
        data={carouselItems}
        sliderWidth={ sliderWidth}
        activeAnimationType={activeAnimationType}
        itemWidth={itemWidth}
        inactiveSlideScale={inactiveSlideScale}
        inactiveSlideOpacity={inactiveSlideOpacity}
        renderItem={renderItems}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        autoplayInterval={autoplayInterval}
      contentContainerCustomStyle={contentContainerCustomStyle}
      containerCustomStyle={containerCustomStyle}
      />
    </SafeAreaView>
  );
};

export default CustomCarousel;