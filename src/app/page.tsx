import ComponentSelector from "components/ComponentSelector";

import { home } from "mockdata";

export default function Home() {
  return (
    <>
      {home.assets?.map((asset) => (
        <ComponentSelector key={asset.id} {...asset} />
      ))}
    </>
  );
}
