import React from "react";
import { ProfileBottom, ProfileTop } from "../../components";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <ProfileTop />
      <ProfileBottom />
      <Outlet />
    </div>
  );
}

export default Profile;
