import AuthorPage from "@/module/authorpage";
const val = "";
export default function index({ seoData }) {
  return <AuthorPage userData={seoData?.dynamicData} />;
}
