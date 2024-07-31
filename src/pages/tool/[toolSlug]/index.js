import ToolsDetails from "@/module/toolsdetails";
export const runtime = "nodejs";

export default function index({ seoData }) {
  return <ToolsDetails seoData={seoData} />;
}
