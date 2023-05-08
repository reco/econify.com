import React from "react";

// replace all new lines with <br>
export default function newLineToBr(text: string | undefined): React.ReactNode {
  if (!text || typeof text !== "string") {
    return <></>;
  }
  return (
    <>
      {text.split("\n").map((i) => (
        <>
          {i}
          <br />
        </>
      ))}
    </>
  );
}
