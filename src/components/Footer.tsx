import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  return (
    <footer className="relative flex justify-between section bg-[#F5F5F5] pt-5 mt-16">
      <p className="absolute uppercase -top-9">Econify</p>
      <div>
        <Link href="https://goo.gl/maps/YU1XoV3tFhgMXsUh6" target="_blank">
          102 Franklin Street FL1
          <br />
          New York, NY 10013
        </Link>
      </div>
      <div className="text-right">
        <Link href="tel:+18333266439">1-833-326-6439</Link>
        <br />
        <Link href="mailto:hello@econify.com">mail</Link>
      </div>
    </footer>
  );
}
