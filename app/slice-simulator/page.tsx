"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components as marketingComponents } from "@/slices/marketing";
import { components as slidesComponents } from "@/slices/slides";

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => (
        <SliceZone
          {...props}
          components={{ ...marketingComponents, ...slidesComponents }}
        />
      )}
    />
  );
}
