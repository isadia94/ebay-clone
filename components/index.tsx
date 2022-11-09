import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";

import {
  ChevronDownIcon,
  BellIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="max-w-7xl  mx-auto p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
          {address ? (
            <button
              onClick={disconnect}
              className="bg-blue-500 connectWalletBtn"
            >
              Hi, {address.slice(0, 5) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect Your Wallet
            </button>
          )}
          <div className="hidden md:inline-flex space-x-4 text-sm">
            <Link href="/">Daily Deals</Link>
            <Link href="/">Help & Contact</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="space-x-4 items-center text-sm ">
            <Link className="hidden md:inline-flex" href="/">
              Ship To
            </Link>
            <Link className="hidden md:inline-flex" href="/">
              Sell
            </Link>
            <Link className="hidden md:inline-flex" href="/">
              WatchList
            </Link>
            <Link
              className="hidden md:inline-flex space-x-4 items-center link"
              href="/"
            >
              Add To Inventory
              <ChevronDownIcon className="h-4" />
            </Link>
          </div>
          <div>
            {address ? (
              <div className="flex space-x-2 justify-center">
                <BellIcon className=" h-6" />
                <UserCircleIcon className="h-6" />
                <ShoppingCartIcon className="h-6" />
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
      <hr className="mt-2" />
      <section className="pt-2">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
              width={100}
              height={100}
              alt="ThirdwebLogo"
            />
          </Link>
          <button className="hidden space-x-2 items-center text-sm md:flex w-20">
            <p className="text-gray-600">Shop by Category</p>
            <ChevronDownIcon className="h-3" />
          </button>
          <div className="flex-1 border-black border-2 px-2 md:px-5 py-2 flex items-center space-x-2">
            <MagnifyingGlassIcon className="w-5 text-gray-400" />
            <input
              className="outline-none w-full"
              placeholder="Search for anything"
              type="text"
            />
          </div>
          <button className="hidden sm:inline bg-blue-600 px-5 md:px-10 py-2 border-2 border-blue-600 text-white">
            Search
          </button>
          <Link href="/create">
            <button className="hidden sm:inline px-5 md:px-10 py-2 border-2 border-blue-600 text-blue hover:bg-blue-600/50 hover:text-white cursor-pointer">
              List Item
            </button>
          </Link>
        </div>
      </section>

      <hr className="mt-2" />
      <section className="flex items-center py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/">
          Electronics
        </Link>
        <Link className="link" href="/">
          Clothes
        </Link>
        <Link className="link hidden sm:inline" href="/">
          Electronics
        </Link>
        <Link className="link hidden sm:inline" href="/">
          Computers
        </Link>
        <Link className="link hidden md:inline" href="/">
          Video Games
        </Link>
        <Link className="link hidden lg:inline" href="/">
          Home & Garden
        </Link>
        <Link className="link hidden lg:inline" href="/">
          Health & Beauty
        </Link>
        <Link className="link hidden lg:inline" href="/">
          Collectibles & Arts
        </Link>
        <Link className="link hidden xl:inline" href="/">
          Books
        </Link>
        <Link className="link hidden xl:inline" href="/">
          Music
        </Link>
        <Link className="link" href="/">
          More
        </Link>
      </section>
    </div>
  );
}
