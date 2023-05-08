import Image from "next/image";

import { Image as ImageType } from "global";
import { prefix } from "utils/tailwindUtils";
import numArray from "./makeArray";
import clsx from "clsx";

const ratio = 1085 / 1500;

function BrowserWindow({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: "dark" | "light";
}) {
  const buttonStyle = clsx([
    `border rounded-full w-[6px] h-[6px] bg-white border-gray-300 transition`,
    prefix("hover:", `bg-gray-500`),
  ]);
  return (
    <div className="rounded-t-sm drop-shadow shadow-black">
      <div className="flex items-center h-3 gap-1 px-1 bg-gray-200">
        {numArray(3).map((key) => (
          <button key={key} className={buttonStyle} />
        ))}
      </div>
      {children}
    </div>
  );
}

export default function Card({
  title,
  image,
}: {
  title: string;
  image: ImageType;
}) {
  return (
    <div className="w-[320px] flex-shrink-0 flex flex-col-reverse">
      <h2 className="pt-3 text-3xl font-bold uppercase font-sansCompressed">
        {title}
      </h2>
      <BrowserWindow theme="dark">
        <Image
          {...image}
          alt={title}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </BrowserWindow>
    </div>
  );
}
