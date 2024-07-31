import GptDetails from "@/module/gptDetails";

export const runtime = "nodejs";

export default function index({ seoData }) {
  return <GptDetails seoData={seoData} />;
}
