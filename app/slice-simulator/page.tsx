import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components as marketingComponents } from "@/slices/marketing";
import { components as slidesComponents } from "@/slices/slides";

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={{...marketingComponents, ...slidesComponents}} />
    </SliceSimulator>
  );
}
