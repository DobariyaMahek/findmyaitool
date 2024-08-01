import Blogdetails from "@/module/blogdetails";
export const runtime = "edge";
export default function Page({ seoData }) {
  return <Blogdetails seoData={seoData} />;
}
