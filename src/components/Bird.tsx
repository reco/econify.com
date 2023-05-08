import React from "react";

export default function Bird({ width = 84, ...props }) {
  return (
    <svg
      width={width}
      height="70"
      viewBox="0 0 84 70"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M26.349 25.533C29.259 27.646 31.36 29.311 32.876 30.609C28.2444 27.7604 24.3553 25.8359 22.369 25.023C12.825 21.117 0 18.624 0 18.624C0 18.624 9.242 28.283 17.565 38.292C20.342 41.633 23.901 46.12 26.096 49.192L28.859 47.582C23.656 59.002 18.711 69.848 18.711 69.848C28.368 67.493 32.711 58.5 32.711 58.5C32.711 58.5 30.918 55.455 39.211 52C53.711 35 47.852 23.984 59.852 18.624C62.499 17.4417 64.7251 17.32 75.9441 18.624C75.9441 18.624 61.711 15.348 56.211 14.348C50.711 13.348 44.211 13.848 39.211 24.848L38.737 25.89C33.471 14.802 20.044 0 20.044 0C20.044 0 21.34 10.633 22.218 22.853C23.703 23.728 25.099 24.626 26.349 25.533Z" />
    </svg>
  );
}
