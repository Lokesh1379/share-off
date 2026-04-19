import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import post_offers from "../../data/posts";
import MobileView from "../headers/MobileView/MobileView";
import SidebarMenu from "../sidebar/SidebarMenu";

const Index = () => {
  // States for input value and suggestions visibility
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Ref for the input field
  const inputRef = useRef(null);

  const getValue = (e) => {
    setShowSuggestions(true);
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    setShowSuggestions(false);
    inputRef.current.focus(); // Focus on the input field
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex h-full">
          <div className="w-60 h-full hidden md:block bg-zinc-950">
            <SidebarMenu />
          </div>
          <div className="w-full fixed bottom-0 md:hidden">
            <MobileView />
          </div>
          {/* Posts Container */}
          <div className="w-4/2 mx-2 lg:mx-8 hide-scrollbar overflow-y-scroll posts-container scrollbar-hidden grid justify-center bg-zinc-950 py-20 h-screen">
            <div className="w-full relative  mx-10">
              <div className="grid md:flex fixed w-full ">
                <div className="flex border w-96 justify-between items-center rounded-md border-zinc-500 bg-zinc-800">
                  <input
                    type="text"
                    ref={inputRef} // Bind inputRef to the input field
                    className="w-full md:w-96 p-1.5 mx-2 rounded-md bg-zinc-800 text-zinc-300 outline-none pr-10"
                    value={inputValue} // Bind input value
                    onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
                    onChange={getValue} // Update input value
                    onBlur={() => setShowSuggestions(false)} // Hide suggestions on blur
                  />
                  {inputValue.length >= 3 && (
                    <AiOutlineClose
                      className="text-white mr-3 cursor-pointer hover:text-indigo-500"
                      onClick={clearInput} // Clear input value on click
                    />
                  )}
                </div>
                <button className="w-96 md:w-fit text-white bg-indigo-500 py-1.5 px-5 rounded-md ml-2">
                  Search
                </button>
              </div>
              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <div
                  className="w-96 relative top-10 left-8 suggetions mx-2 mt-2"
                  onMouseDown={(e) => e.preventDefault()} // Prevent blur when interacting with suggestions
                >
                  <ul className="rounded-md border">
                    {post_offers
                      ?.filter((offer) =>
                        offer.platform
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      ) // Filter suggestions based on input
                      .map((offer, index) => (
                        <li
                          key={index}
                          className="rounded-sm text-zinc-300 p-1 hover:bg-zinc-300 hover:text-indigo-800 cursor-pointer"
                          onClick={() => {
                            setInputValue(offer.platform); // Set input value to selected suggestion
                            setShowSuggestions(false); // Hide suggestions after selection
                          }}
                        >
                          {offer?.platform}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="w-96 mr-2  rounded-md p-2 hidden fixed right-10 lg:block bg-zinc-900">
            <div className="bg-zinc-900 mt-10">
              <h2 className="text-center p-2 bg-indigo-500 text-white font-thin rounded-md my-2 width-96">
                Search Top Offers
              </h2>
              <hr className="mb-2" />
            </div>

            <div className="w-full pb-20 rounded-md h-screen flex flex-wrap justify-center overflow-y-scroll hide-scrollbar">
              {post_offers.map((offer, index) => (
                <div
                  key={index}
                  className="rounded-md m-1 hover:scale-110 transition-transform duration-300 hover:bg-indigo-500 group"
                >
                  <img
                    src={offer.image}
                    alt=""
                    className="w-32 h-32 p-1 rounded-md"
                  />
                  <p className="text-white rounded-md font-thin text-center group-hover:bg-indigo-500">
                    {offer?.platform}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
