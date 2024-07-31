import AuthorPage from "@/module/authorpage";

export const runtime = "nodejs";

export default function index({ seoData }) {
  return <AuthorPage userData={seoData?.dynamicData} />;
}
