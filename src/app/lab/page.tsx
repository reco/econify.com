import ComponentSelector from "components/ComponentSelector";

import { lab } from "mockdata";

export default function Home() {
  return (
    <>
      {lab.assets?.map((asset) => (
        <ComponentSelector key={asset.id} {...asset} />
      ))}
    </>
  );
}
