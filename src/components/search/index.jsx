import Mobilemenu from "../headers/mobileHeader";
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
          <div className="w-full  fixed bottom-0 md:hidden">
            <MobileView />
          </div>
          {/* Posts Container */}
          <div className="w-full  p-5 h-full overflow-y-scroll posts-container scrollbar-hide grid justify-center">
            <div className=" h-96  rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
