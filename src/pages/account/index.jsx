import React, { useEffect } from "react";
import Svgs from "../sign-up/Svgs";
import LoginPage from "../login/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import Intro from "../../components/Intro/Intro";
import { setIntro } from "../../featers/intro";
import SignupForm from "../sign-up/SignupForm";

const AccountPage = () => {
  const { intro } = useSelector((state) => state.intro);
  const { userWantTo } = useSelector((state) => state.globalAttributes);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setIntro(false));
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {intro ? (
        <Intro />
      ) : (
        <div className="w-screen h-screen grid md:flex ">
          <div className=" lg:w-1/2 hidden md:block :hidden md:w-screen border h-screen bg-[url('/assets/images/cover.jpg')] w- ">
            <h1 className="border h-20">Share %Off</h1>
          </div>
          <div className=" lg:w-1/2 :hidden md:w-screen border h-screen  grid justify-center items-center">
            {userWantTo === "login" ? <LoginPage /> : <SignupForm />}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPage;
