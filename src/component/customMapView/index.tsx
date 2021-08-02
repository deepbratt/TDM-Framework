import React, { FC } from 'react';
import MapView from 'react-native-maps';
import { MapViewProps } from '../../../types';

const CustomMapView: FC<MapViewProps> = ({
    provider,
    style,
}) => {
    return (
        <MapView
            provider={provider}
            style={style}
        >
        </MapView>
    )
}
export default CustomMapView