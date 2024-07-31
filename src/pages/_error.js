import dynamic from "next/dynamic";
const NoDataFound = dynamic(() => import("../shared/components/404"), {
  ssr: false,
});
export const runtime = "experimental-edge";

const Custom404 = () => {
  return <NoDataFound />;
};

export default Custom404;
