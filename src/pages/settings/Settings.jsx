import MetaComponent from "../../components/headers/globalComponents/MetaComponent";
import SettingsComponent from "../../components/settings/index";

const Settings = () => {
  const metadata = {
    title: "Settings || Share%off ",
    description: "Share%off - convert Offers into money",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <SettingsComponent />
    </>
  );
};
export default Settings;
