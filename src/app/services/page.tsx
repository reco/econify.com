import ComponentSelector from "components/ComponentSelector";

import { services } from "mockdata";

export default function Home() {
  return (
    <>
      {services.assets?.map((asset) => (
        <ComponentSelector key={asset.id} {...asset} />
      ))}
    </>
  );
}
