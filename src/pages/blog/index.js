import BlogPage from "@/module/blog";
export const runtime = "edge";
export default function index() {
  return <BlogPage />;
}
