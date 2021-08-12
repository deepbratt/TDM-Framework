import React, { useState, useRef,FC } from "react";
import {  SafeAreaView,} from "react-native";
import Carousel from "react-native-snap-carousel";

interface Props{
  renderItems?: any,
  listItems?: any,
  layout?:any,
  layoutCardOffset?:any,
  autoplay?:any,
  loop?:any,
  enableMomentum?:any,
  enableSnap?:any,
  autoplayDelay?:any,
  sliderWidth?:any,
  activeAnimationType?:any,
  itemWidth?:any,
  inactiveSlideScale?:any,
  inactiveSlideOpacity?:any,
  autoplayInterval?:any,
  contentContainerCustomStyle?:any,
  containerCustomStyle?: any,
  ref?: any;
}

const CustomCarouselSaim40: FC<Props> = (Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState(Props.listItems);
  const ref = useRef(null);

  return (
    <SafeAreaView>
      <Carousel
        layout={Props.layout}
        layoutCardOffset={Props.layoutCardOffset}
        ref={Props.ref}
        autoplay={Props.autoplay}
        loop={Props.loop}
        autoplayDelay={Props.autoplayDelay}
        enableMomentum={Props.enableMomentum}
        enableSnap={Props.enableSnap}
        data={carouselItems}
        sliderWidth={ Props.sliderWidth}
        activeAnimationType={Props.activeAnimationType}
        itemWidth={Props.itemWidth}
        inactiveSlideScale={Props.inactiveSlideScale}
        inactiveSlideOpacity={Props.inactiveSlideOpacity}
        renderItem={Props.renderItems}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        autoplayInterval={Props.autoplayDelay}
        contentContainerCustomStyle={Props.contentContainerCustomStyle}
        containerCustomStyle={Props.containerCustomStyle}
      />
    </SafeAreaView>
  );
};

export default CustomCarouselSaim40;