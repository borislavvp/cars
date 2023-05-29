"use client";

import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="flex h-full flex-col items-center px-12">
      <div className="mt-36 flex items-center justify-between">
        <div className="mr-20 flex w-1/2 flex-col items-start space-y-10">
          <div className="flex flex-col items-start space-y-5">
            <span className="text-5xl font-semibold text-gray-800">
              Поръчай мечтания автомобил.
            </span>
            <span>
              qlwdqowdmiqwodmmmmmmmmmmmmmmmmmmmmqwo ndiqwn dnasdo qwdm pqwdpasmd
              qwmd qw.
            </span>
          </div>
          <Link
            href="/order"
            className="text-md cursor-pointer rounded-md bg-blue-500 px-8 py-4 font-semibold text-white shadow-md hover:bg-blue-600"
          >
            Поръчай автомобил
          </Link>
        </div>
        <div className="flex w-1/2 justify-center ">
          <Image
            className="relative h-full w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/0909090.png"
            alt="Car"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
