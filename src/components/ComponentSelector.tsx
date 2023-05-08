import dynamic from "next/dynamic";

import { AssetType } from "global";

import { ScrollProps } from "components/Scroll";
import { TextProps } from "components/Text";

type ComponentMap = {
  services: React.ComponentType<{}>;
  scroll: React.ComponentType<ScrollProps>;
  text: React.ComponentType<TextProps>;
  // Add other components' prop types here
};

const Services = dynamic(() => import("components/Services"));
const Scroll = dynamic(() => import("components/Scroll"));
const Text = dynamic(() => import("components/Text"));

const getComponent = (
  type: AssetType
): ComponentMap[keyof ComponentMap] | undefined => {
  const components: ComponentMap = {
    services: Services,
    scroll: Scroll,
    text: Text,
  };
  return components[type.toLowerCase() as keyof ComponentMap];
};

export default function ComponentSelector(asset: any) {
  // TODO: fix any
  if (!asset.type) return null;
  const Component = getComponent(asset.type);
  if (!Component) {
    console.warn(`Shelf item type "${asset.type}" invalid.`);
    return <></>;
  }
  return <Component {...asset} />;
}
