import GptStore from "@/module/gptStore";
export const runtime = "edge";
export default function index() {
  return <GptStore />;
}
