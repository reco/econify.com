type AssetType =
  | "page"
  | "services"
  | "scroll"
  | "text"
  | "project"
  | "caseStudy";

type AssetBase = {
  type: AssetType;
  id: string;
  title: string;
  description: string;
  assets?: Asset[];
};

export type Image = {
  src: string;
  width: number;
  height: number;
};

export type Project = AssetBase & {
  client: string;
  image: Image;
};

export type Text = AssetBase & {
  text: string;
};

export type CaseStudy = AssetBase & {
  client: string;
};

export type Page = AssetBase;

export type Scroll = AssetBase & {
  direction: "horizontal" | "vertical";
};

export type Services = AssetBase;

// Asset type mapping
// TODO: Why this should be better

import { ScrollProps } from "components/Scroll";
import { TextProps } from "components/Text";

interface AssetTypeMap {
  project: Project;
  text: Text;
  caseStudy: CaseStudy;
  services: Services;
  scroll: Scroll;
}

export type Asset<T extends AssetType> = AssetTypeMap[T];
