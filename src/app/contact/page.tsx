import ComponentSelector from "components/ComponentSelector";

import { contact } from "mockdata";

export default function Home() {
  return (
    <>
      {contact.assets?.map((asset) => (
        <ComponentSelector key={asset.id} {...asset} />
      ))}
    </>
  );
}
