import React, { useState } from "react";
import Player from "../public/img/card.svg";
import { Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";

const AvailableTeams = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-3xl lg:text-4xl text-white">Available Teams</h3>
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
            ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Flippable: 4
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 pt-4">
        <Transition
          show={showModal}
          enter="transform transition duration-[500ms] ease-in"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-[300ms] transition ease-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-0 "
          className="w-[100vw] h-[100vh] bg-[#4d4c4cd9] fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <div className=" bg-shade-bg sm:max-w-full  h-1/2 sm:w-1/2 sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
            <p className="sm:mb-14 mb-6 text-lg">Please Select Amount</p>

            <div className="px-2  flex  flex-col sm:flex-row justify-center items-center">
              <input
                type="number"
                min={1}
                max={6}
                className="text-white bg-shade-9 w-[100px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-4 mb-6 sm:mb-0 sm:mr-2 "
              />

              <BsArrowLeftRight className=" text-3xl mr-2" />

              <input
                type="number"
                min={1}
                max={6}
                className="text-white bg-shade-9 w-[100px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-4 mb-6 sm:mb-0 sm:mr-12 "
              />
              <p className="text-3xl">Flip</p>
              <a
                className="self-center text-center fixed z-50 top-1 sm:left-full left-[78%] rounded-full ml-3 bg-purple-900 px-2 py-2 "
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <MdClose className="text-4xl text-white" />
              </a>
            </div>
            <a className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10">
              Confirm
            </a>
          </div>
        </Transition>
        <Player
          className="text-[26rem]"
          onClick={() => {
            setShowModal(!showModal);
          }}
        />
        <Player
          className="text-[26rem]"
          onClick={() => {
            setShowModal(!showModal);
          }}
        />
      </div>
    </div>
  );
};

export default AvailableTeams;
