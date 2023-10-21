import LayoutBanner from "@/app/components/layout/LayoutBanner";
import LayoutNavbar from "@/app/components/layout/LayoutNavbar";
import React from "react";

const index = () => {
  return (
    <div className="h-full w-full">
      <LayoutNavbar />
      <LayoutBanner />
    </div>
  );
};

export default index;
