import React,{FC} from 'react';
import { Avatar } from "react-native-elements";

interface Props{
    overlayContainerStyle: any;
    size: any;
    rounded: boolean;
    title: string;
    onPress: () => void;
    activeOpacity: any;
}
const CustomAvatar: FC<Props> = (Props) => {
    return (
        <Avatar
            overlayContainerStyle={Props.overlayContainerStyle}
            size={Props.size}
            rounded={Props.rounded}
            title={Props.title}
            onPress={Props.onPress}
            activeOpacity={Props.activeOpacity}
        />
    )
}
export default CustomAvatar;