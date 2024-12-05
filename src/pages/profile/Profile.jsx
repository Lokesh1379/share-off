import MetaComponent from "../../components/headers/globalComponents/MetaComponent";
import ProfileComponent from "../../components/profile/index";

const Settings = () => {
  const metadata = {
    title: "Search || Share%off ",
    description: "Share%off - convert Offers into money",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <ProfileComponent />
    </>
  );
};
export default Settings;
