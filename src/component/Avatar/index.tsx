import React,{FC} from 'react';
import { Avatar } from "react-native-elements";
import { AvatarProps } from '../../../types';

const CustomAvatar: FC<AvatarProps> = ({
    overlayContainerStyle,
    size,
    rounded,
    onPress,
    activeOpacity,
    source,
    imageProps
}) => {
    return (
        <Avatar
            overlayContainerStyle={overlayContainerStyle}
            size={size}
            rounded={rounded}
            source={source}
            onPress={onPress}
            imageProps={imageProps}
            activeOpacity={activeOpacity}
        />
    )
}
export default CustomAvatar;