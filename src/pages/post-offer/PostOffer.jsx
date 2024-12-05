import MetaComponent from "../../components/headers/globalComponents/MetaComponent";
import OfferComponent from "../../components/post-offer/index";

const PostOffer = () => {
  const metadata = {
    title: "Post Offer || Share%off ",
    description: "Share%off - convert Offers into money",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <OfferComponent />
    </>
  );
};
export default PostOffer;
