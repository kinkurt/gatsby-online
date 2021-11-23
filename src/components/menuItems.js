import * as React from "react";
import { Menu,Transition  } from '@headlessui/react'
import "tailwindcss/tailwind.css";
import {DotsHorizontalIcon} from '@heroicons/react/outline';

const MenuItems=()=> {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button><DotsHorizontalIcon className="h-4 w-4"/></Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
        <Menu.Items className="absolute right-0 w-96 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          
        <Menu.Item>
              {() => (
                <button
                  className={`
                    text-red-500 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Report
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  className={`
                  text-red-500 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Unfollow
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  className={`
                  text-black group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Go to post
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {() => (
                <button
                  className={`
                  text-black group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Tagged accounts
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {() => (
                <button
                  className={`
                  text-black group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Cancel
                </button>
              )}
            </Menu.Item>
          
        </Menu.Items>
        </Transition>
      </Menu>
    )
  };

  export default MenuItems;