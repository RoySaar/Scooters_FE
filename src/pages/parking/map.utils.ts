export function getLatLngFromClick(e: google.maps.MapMouseEvent): google.maps.LatLngLiteral {
    return (
        {
            lat: e.latLng?.lat() || 0,
            lng: e.latLng?.lng() || 0
        }
    )
};