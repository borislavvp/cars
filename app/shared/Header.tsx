"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export enum ROUTE {
  HOME = "/",
  ORDER = "/order",
  PARTNERS = "/partners",
  CONTACT = "/contact",
  ABOUT = "/about"
}

export const Header = () => {
  const path = usePathname();

  const routeLinkStyle = (route: ROUTE) =>
    `font-medium  ${
      path === route ? "text-blue-700 cursor-default" : "hover:text-blue-600"
    }`;

  return (
    <div className="mb-5 flex w-full items-center justify-between pb-4">
      <div className="rounded p-4 shadow-md">
        <span>LOGO</span>
      </div>
      <div className="flex items-center space-x-10 text-gray-900">
        <Link href={ROUTE.HOME} className={routeLinkStyle(ROUTE.HOME)}>
          Начало
        </Link>
        <Link href={ROUTE.ORDER} className={routeLinkStyle(ROUTE.ORDER)}>
          Поръчай
        </Link>
        <Link href={ROUTE.PARTNERS} className={routeLinkStyle(ROUTE.PARTNERS)}>
          Партньори
        </Link>
        <Link href={ROUTE.CONTACT} className={routeLinkStyle(ROUTE.CONTACT)}>
          Контакти
        </Link>
        <Link href={ROUTE.ABOUT} className={routeLinkStyle(ROUTE.ABOUT)}>
          За нас
        </Link>
      </div>
    </div>
  );
};
