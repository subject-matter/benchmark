"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
	lat: number;
	lng: number;
}

function Map({ lat, lng }: MapProps) {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
				version: "weekly",
			});

			const { Map } = await loader.importLibrary("maps");

			const position = {
				lat,
				lng,
			};

			const { Marker } = (await loader.importLibrary(
				"marker"
			)) as google.maps.MarkerLibrary;

			const mapOptions: google.maps.MapOptions = {
				center: position,
				zoom: 18,
				mapId: "SHOWHOME_MAPID",
				disableDefaultUI: true,
				styles: [
					{
						featureType: "all",
						elementType: "labels",
						stylers: [{ visibility: "off" }],
					},
				],
			};

			const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

			const marker = new Marker({
				map: map,
				position: position,
			});
		};

		initMap();
	}, []);
	return (
    <div
      className="aspect-square h-full w-full  object-cover grayscale "
      ref={mapRef}
    ></div>
  );
}

export default Map;
