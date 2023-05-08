import Card from "./Card";
import type { Project } from "global";

export type ScrollProps = {
  title: string;
  assets?: Project[];
};

export default function Scroll({ title, assets = [] }: ScrollProps) {
  return (
    <section className="section">
      <h2 className="heading1">{title}</h2>
      <div className="flex gap-4 pb-6 overflow-x-auto overflow-y-hidden">
        {assets.map((asset) => (
          <Card key={asset.id} {...asset} />
        ))}
      </div>
    </section>
  );
}
