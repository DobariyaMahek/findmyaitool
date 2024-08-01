import AuthorsList from "@/module/authorslist";
export const runtime = "edge";
export default function index() {
  return <AuthorsList />;
}
