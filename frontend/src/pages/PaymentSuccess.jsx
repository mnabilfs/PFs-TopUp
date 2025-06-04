import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { orderId } = useParams();

  useEffect(() => {
    // Lakukan pengecekan status transaksi atau tindakan lain berdasarkan orderId
    console.log("Order ID:", orderId);
  }, [orderId]);

  return (
    <div>
      <h1>Payment Success</h1>
      <p>Order ID: {orderId}</p>
      {/* Tampilkan informasi transaksi lebih lanjut jika perlu */}
    </div>
  );
};

export default PaymentSuccess;
