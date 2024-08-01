import NoDataFound from "@/shared/components/404";
import React from "react";

export const runtime =
  process.env.NEXT_PUBLIC_USE_EDGE_RUNTIME === "true"
    ? "edge"
    : "experimental-edge";

const _error = () => {
  return <NoDataFound />;
};

export default _error;
