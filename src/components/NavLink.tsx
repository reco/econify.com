import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  className = "",
  children,
  ...pros
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        className,
        // default styles
        `relative after:content-[''] after:w-0 after:absolute after:inset-0 
        after:top-[100%] after:bottom-0 after:h-[2px] after:bg-black 
        after:transition-all after:duration-200`,
        // not active and hover
        !isActive && "hover:after:w-[10px]",
        // active
        isActive && "after:w-[100%]"
      )}
      href={href}
      {...pros}
    >
      {children}
    </Link>
  );
}
