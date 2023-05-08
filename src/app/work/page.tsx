import ComponentSelector from "components/ComponentSelector";

import { work } from "mockdata";

export default function Home() {
  return (
    <>
      {work.assets?.map((asset) => (
        <ComponentSelector key={asset.id} {...asset} />
      ))}
    </>
  );
}
