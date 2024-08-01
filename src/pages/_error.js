import React from "react";
import NoDataFound from "@/shared/components/404";
export const runtime = "edge";

const error = () => {
  return <NoDataFound />;
};

export default error;
