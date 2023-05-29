"use client";

import Image from "next/image";
import { Form } from "./components/Form";

const Order = () => {
  return (
    <div className="flex  h-full w-full space-x-12 px-12  pt-4">
      <div className="flex h-full  w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 px-12 py-24 ">
        <div className="flex flex-col items-center ">
          <span className="mb-10 text-2xl text-white">
            Поръчай мечтания автомобил.
          </span>
          <span className="text-md text-gray-300 ">
            Ако проявявате интерес към някои от нашите автомобили или просто си
            търсите автомобил, моля попълнете контактната форма по-долу с
            дейтали за автомобила и възможно най-скоро ще се свръжем с Вас:
          </span>
        </div>
        <div className="rounded-xl bg-blue-700 bg-opacity-50 p-5 shadow-xl">
          <p className="text-md  text-gray-100">
            В началото бях малко съмнителен относно вашата работа, но начинът,
            по който се оказа, в крайна сметка е невероятен и изненадващ.
            Изненадахте всички нас. Продължавай с добрата работа.
          </p>
          <div className="mt-4 flex items-center ">
            <Image
              src="/person.jpeg"
              alt="ivan"
              className="mr-4 h-20 w-20 rounded-md object-cover shadow-lg"
              width="70"
              height="70"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg text-gray-100">Ivan Boychev</span>
              <span className="text-md text-gray-300">Mercedes-Benz S400</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col items-start rounded-r-3xl  ">
        <span className="pb-5 text-2xl font-semibold text-gray-900">
          Поръчай мечтания автомобил.
        </span>
        {<Form />}
      </div>
    </div>
  );
};

export default Order;
