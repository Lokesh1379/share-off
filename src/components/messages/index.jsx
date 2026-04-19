import React, { useState, useRef, useEffect } from "react";
import post_offers from "../../data/posts";
import Mobilemenu from "../headers/mobileHeader";
import MobileView from "../headers/MobileView/MobileView";
import SidebarMenu from "../sidebar/SidebarMenu";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef(null); // Ref for the messages container

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [messages, setMessages] = useState([
    { text: "Hey, how are you?", sender: false },
    { text: "I'm good, thanks! How about you?", sender: true },
    { text: "I'm doing great, just working on a project.", sender: false },
    { text: "That sounds exciting! What project is it?", sender: true },
    { text: "It's a web app for managing tasks.", sender: false },
    { text: "That sounds useful! I need one of those.", sender: true },
    { text: "Yeah, it helps me stay organized.", sender: false },
  ]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter offers based on search term
  const filteredOffers = post_offers.filter((offer) =>
    offer.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = { text: newMessage, sender: true }; // Assume the sender is the user
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage(""); // Clear the input field after sending the message
    }
  };

  // Scroll to the latest message after sending
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]); // Run when messages state updates

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-60 h-full hidden md:block bg-zinc-950">
            <SidebarMenu />
          </div>
          <div className="w-full fixed bottom-0 md:hidden">
            <MobileView />
          </div>

          {/* Posts Container */}
          <div className="w-full flex p-5 h-full overflow-y-scroll posts-container scrollbar-hide justify-center">
            {/* Chats Section */}
            <div className="w-1/2 overflow-x-hidden mx-2 border h-full overflow-y-scroll hide-scrollbar">
              <div className="sticky top-0 grid md:w-inherit justify-center bg-zinc-900 items-center px-3">
                <span className="text-white ml-4 mt-2 bg-zinc-900">Chats</span>
                <div className="relative">
                  <input
                    type="text"
                    className="w-80 p-1 m-3 rounded-md bg-zinc-800 text-white border border-zinc-400"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  {searchTerm && (
                    <AiOutlineClose
                      className="absolute text-white right-5 top-5 cursor-pointer"
                      onClick={clearSearch}
                    />
                  )}
                </div>
              </div>
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer, index) => (
                  <div
                    key={index}
                    className={`border-b-1 h-16 flex items-center px-3 cursor-pointer ${
                      selectedChat === index ? "bg-indigo-500" : "bg-zinc-800"
                    }`}
                    onClick={() => setSelectedChat(index)}
                  >
                    <div>
                      <img
                        src={offer?.image}
                        className="w-12 h-12 rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="text-white pl-5 text-lg">
                        {offer?.platform}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white text-center mt-4">
                  No results found.
                </div>
              )}
            </div>

            {/* Chat Container */}
            <div className="w-full chat_container flex flex-col h-full overflow-y-scroll hide-scrollbar bg-zinc-900 p-4">
              {selectedChat !== null && (
                <div className="flex items-center p-4 bg-zinc-800 text-white">
                  <img
                    src={filteredOffers[selectedChat]?.image}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="ml-4 text-xl">
                    {filteredOffers[selectedChat]?.platform}
                  </span>
                </div>
              )}
              {/* Chat Messages */}
              <div className="flex flex-col space-y-4 mt-4 overflow-y-scroll hide-scrollbar">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-white ${
                        message.sender ? "bg-blue-500" : "bg-gray-600"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* This will scroll to the bottom of the messages */}
              <div ref={messagesEndRef} />
              {/* Input and Send Button */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full p-3 rounded-md bg-zinc-700 text-white border border-zinc-400"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <AiOutlineSend
                  onClick={handleSendMessage}
                  className="text-white cursor-pointer text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
