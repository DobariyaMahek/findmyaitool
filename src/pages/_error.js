import NoDataFound from "@/shared/components/404";
import React from "react";

export const runtime = "edge"; // Use 'edge' directly here

const _error = () => {
  return <NoDataFound />;
};

export default _error;
