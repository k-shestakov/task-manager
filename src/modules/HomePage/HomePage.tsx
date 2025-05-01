import React from "react";
import { useAuthStore } from "../../stores/authStore";
import { UserInfo } from "./components/UserInfo";
import { Login } from "./components/Login";

export const HomePage: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <section className="container mx-auto px-4">
      <div className="">{user ? <UserInfo /> : <Login />}</div>
    </section>
  );
};
