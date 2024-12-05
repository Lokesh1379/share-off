import React from "react";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import AccountPage from "./pages/account";
import Home from "./components/home/Home";
import Settings from "./pages/settings/Settings";
import Messages from "./pages/messages";
import Search from "./pages/search/Search";
import PostOffer from "./pages/post-offer/PostOffer";
import ProfileComponent from "./pages/profile/Profile";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/signup" element={<AccountPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/post-offer" element={<PostOffer />} />
            <Route path="/profile" element={<ProfileComponent />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
