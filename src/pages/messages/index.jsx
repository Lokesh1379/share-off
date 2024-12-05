import MetaComponent from "../../components/headers/globalComponents/MetaComponent";
import MessagesComponent from "../../components/messages/index";

const Messages = () => {
  const metadata = {
    title: "Messages || Share%off ",
    description: "Share%off - convert Offers into money",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <MessagesComponent />
    </>
  );
};
export default Messages;
