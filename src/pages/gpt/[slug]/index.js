import GptDetails from "@/module/gptDetails";
export const runtime = "edge";
export default function index({ seoData }) {
  return <GptDetails seoData={seoData} />;
}
