import PaymentSuccessful from "@/module/paymentSuccessful";
export const runtime = "edge";
export default function index() {
  return <PaymentSuccessful />;
}
