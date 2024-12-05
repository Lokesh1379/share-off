import MetaComponent from "../../components/headers/globalComponents/MetaComponent";
import SearchComponent from "../../components/search/index";

const Settings = () => {
  const metadata = {
    title: "Search || Share%off ",
    description: "Share%off - convert Offers into money",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <SearchComponent />
    </>
  );
};
export default Settings;
