import AuthorPage from "@/module/authorpage";


export default function index({seoData}) {
  return <AuthorPage userData={seoData?.dynamicData}/>;
}
