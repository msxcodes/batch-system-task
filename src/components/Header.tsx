import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-2 sm:py-0">
      <nav
        className="relative max-w-6xl w-full mx-auto px-4 sm:flex items-center justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/header/Frame.svg"}
              alt="logo"
              width={30}
              height={30}
            />
            <a className="flex-none text-3xl font-semibold" href="#">
              uifry
            </a>
          </div>

          {/* Mobile Menu Button  */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex text-lg flex-col sm:flex-row sm:items-center py-2 md:py-0 sm:ps-7">
            {navItems.map((item) => {
              return (
                <Link
                  className="py-3 ps-px sm:px-3 sm:py-6 font-[600] text-neutral-900"
                  href={item.href}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="flex items-center gap-x-2 py-2 sm:py-0 sm:ms-auto">
              <a
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600"
                href="#"
              >
                <button className="max-w-max bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700 rounded-sm">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
];
