import Blogdetails from "@/module/blogdetails";
export const runtime = "nodejs";

export default function Page({ seoData }) {
  return <Blogdetails seoData={seoData} />;
}
