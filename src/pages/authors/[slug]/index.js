import AuthorPage from "@/module/authorpage";

export const runtime = "edge";

export default function index({ seoData }) {
  return <AuthorPage userData={seoData?.dynamicData} />;
}
