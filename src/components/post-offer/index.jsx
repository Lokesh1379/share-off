import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import Mobilemenu from "../headers/mobileHeader";
import MobileView from "../headers/MobileView/MobileView";
import SidebarMenu from "../sidebar/SidebarMenu";

const Index = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null); // State for date picker

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result); // Set the base64 image as background
      };
      reader.readAsDataURL(file);
    }
  };

  // Array of fields for dynamic rendering
  const fields = [
    {
      id: "platform",
      label: "Platform",
      type: "text",
      placeholder: "Enter platform name",
    },
    {
      id: "caption",
      label: "Caption",
      type: "text",
      placeholder: "Enter caption",
    },
    {
      id: "price",
      label: "Price",
      type: "number",
      placeholder: "Enter price",
      noSpinner: true,
    },
    {
      id: "offerCode",
      label: "Offer Code",
      type: "text",
      placeholder: "Enter offer code",
    },
    {
      id: "priceExpected",
      label: "Price Expected",
      type: "number",
      placeholder: "Enter expected price",
      noSpinner: true,
    },
  ];

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
          <div className="w-full mt-3 md:mx-10 h-full overflow-y-scroll posts-container hide-scrollbar grid bg-zinc-900 rounded-md p-3 ">
            <div
              className="w-full border-2 rounded-md border-zinc-600 h-96 p-2 flex flex-col items-center justify-center gap-3"
              style={{
                backgroundImage: backgroundImage
                  ? `url(${backgroundImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <label
                htmlFor="fileInput"
                className="bg-zinc-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-zinc-700"
              >
                Choose Image
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {!backgroundImage && (
                <p className="text-zinc-400 text-sm">No image selected</p>
              )}
            </div>
            {/* Input Container */}
            <div className="input_container mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-900 p-5 rounded-md">
              {fields.map((field) => (
                <div key={field.id} className="flex flex-col">
                  <label
                    htmlFor={field.id}
                    className="text-white font-thin mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-zinc-700 text-white p-2 rounded-md outline-none focus:ring focus:ring-zinc-500"
                    {...(field.noSpinner && {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    })}
                  />
                </div>
              ))}
              {/* Expiry Date Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="expiryDate"
                  className="text-white mb-2 font-thin"
                >
                  Expiry Date
                </label>
                <DatePicker
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="bg-zinc-700 text-white p-2 rounded-md outline-none focus:ring focus:ring-zinc-500 w-full"
                  placeholderText="Select expiry date"
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
