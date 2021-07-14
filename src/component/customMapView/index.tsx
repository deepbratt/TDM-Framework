import React, { FC } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
interface Props{
    style: any;
    provider:any
}
const CustomMapView: FC<Props> = (Props)=>{
    return (
        <MapView
            provider={Props.provider}
            style={Props.style}
        >
        </MapView>
    )
}
export default CustomMapView