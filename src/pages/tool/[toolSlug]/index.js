import ToolsDetails from "@/module/toolsdetails";
export const runtime = "edge";

export default function index({ seoData }) {
  return <ToolsDetails seoData={seoData} />;
}
