import post_offers from "../../data/posts";
import MobileView from "../headers/MobileView/MobileView";
import SidebarMenu from "../sidebar/SidebarMenu";

const Index = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-60 h-full hidden md:block bg-zinc-950 ">
            <SidebarMenu />
          </div>
          <div className="w-full fixed bottom-0 md:hidden">
            <MobileView />
          </div>
          {/* Posts Container */}
          <div className="w-fit  bg-zinc-950 p-5 flex ">
            <div className="profile_section flex-1 overflow-y-auto hide-scrollbar md:mx-5">
              <div className="h-80 relative bg-[url('https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-3840x2160-8324.png')] shadow-white bg-no-repeat bg-center bg-cover rounded-lg border-2 border-zinc-700">
                <div className="absolute bottom-5 left-5  profile_photo">
                  <img
                    src="/assets/images/mine.jpg"
                    className="w-24 border-2 border-green-600 rounded-full  bottom-5 left-5"
                    alt=""
                  />
                  <div>
                    <h1 className="user_name px-2">User Name</h1>
                    <span className=" px-5 text-zinc-400 font-thin">
                      user@1379
                    </span>
                  </div>
                </div>
              </div>
              <div className=" mt-10 rounded-none  text-white">
                <p>Bio</p>
              </div>
              <div className=" my-5 grid bg-zinc-900 rounded-md p-2">
                <div className="w-full flex">
                  <button className=" md:px-10 py-2 w-full   hover:bg-zinc-700 text-white m-1">
                    Posted Offers
                  </button>
                  <button className=" md:px-10 py-2 w-full hover:bg-zinc-700 text-white m-1">
                    Saved Offers
                  </button>
                </div>
                <hr className="border-zinc-500 border-2" />
                <div className="flex flex-wrap justify-center mt-5">
                  {post_offers.map((p) => {
                    return (
                      <>
                        <img
                          src={p.image}
                          className="w-80 h-66 md:w-40 m-1  hover:scale-105 hover:rounded-md border transition-transform duration-300"
                          alt=""
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="shadow-xl bg-zinc-900  hidden lg:block rounded-md right-5  h-full w-fit  ">
              <button className="text-white px-5 py-2 mx-5 my-10 w-44 h-fit rounded-md bg-gray-700 font-thin">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
