import React from "react";
import WebStories from "@/components/webstories/Webstories";
import { dummyData } from "../data";
const index = () => {
 
  return (
    <div>
      <WebStories data={dummyData} />
    </div>
  );
};

export default index;
