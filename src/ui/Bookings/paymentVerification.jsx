import { useSearchParams } from "react-router-dom";

function PaymentVerification() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment");
  return <div>payment {paymentId}</div>;
}

export default PaymentVerification;
