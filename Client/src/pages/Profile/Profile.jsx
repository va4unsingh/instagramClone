import React from "react";
import { ProfileBottom, ProfileFooter, ProfileTop } from "../../components";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <ProfileTop />
      <ProfileBottom />
      <Outlet />
      <ProfileFooter />
    </div>
  );
}

export default Profile;
