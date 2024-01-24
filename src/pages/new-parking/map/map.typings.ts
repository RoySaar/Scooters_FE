import React from "react";
import {GoogleMapProps} from "@react-google-maps/api";

export interface MapProps extends React.PropsWithChildren<any> {
    center?: GoogleMapProps['center'];
    zoom?: GoogleMapProps['zoom'];
}