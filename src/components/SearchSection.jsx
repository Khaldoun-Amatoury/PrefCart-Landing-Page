import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Fruits",
    description: "Fresh fruits",
    href: "#",
  },
  {
    name: "Soft Drinks",
    description: "Pepsi",
    href: "#",
  },
  {
    name: "Alcohol",
    description: "Tequila",
    href: "#",
  },
];

export default function SearchSection() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-black xl:text-3xl">
          SEARCH
        </h2>
        <p className="max-w-4xl mt-6 mb-8 text-center text-gray-500">
          Find what you need in the easiest and fastest way.
        </p>
        <form className="w-full max-w-3xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium sr-only text-black md:mr-4"
            >
              Write here
            </label>

            <Popover className="relative w-full md:w-64">
              <Popover.Button className="flex-shrink-0 z-10 inline-flex items-center whitespace-nowrap py-2.5 px-10 text-sm font-medium text-center text-black bg-white hover:bg-customRed hover:text-white border border-black rounded-s-lg focus:ring-4 focus:outline-none focus:ring-customRed">
                <span>All Categories</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-black">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-customRed"
                        >
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-black hover:text-white"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-800 hover:text-white">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="relative w-full mt-4 md:mt-0">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-customRed bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-black focus:ring-customRed focus:border-customRed"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black bg-white rounded-e-lg border border-black hover:bg-customRed hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <div className="inline-flex w-full mt-6 space-x-4 sm:w-auto">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 text-white duration-300 bg-black hover:bg-customRed hover:text-white rounded-lg "
          >
            Search
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-2 text-white duration-300 bg-black rounded-lg hover:bg-customRed hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-3 ml-0 bg-white"
              viewBox="0 0 512 512"
            >
              <path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
            </svg>
            Scan
          </button>
        </div>
      </div>
    </section>
  );
}
