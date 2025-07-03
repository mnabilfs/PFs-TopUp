import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
} from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";
import { useNavigate } from "react-router-dom"; // Impor useNavigate

const ModalDetailPesanan = ({
  open,
  onClose,
  data,
  nickname,
  userId,
  zoneId,
  snapToken,
}) => {
  const { selectedTopup } = data;
  const grossAmount = selectedTopup ? selectedTopup.price * 1.11 : 0;
  const tax = Math.round(grossAmount - grossAmount / 1.11);
  const taxableAmount = grossAmount - tax;

  const navigate = useNavigate(); // Inisialisasi navigate

  const handleKonfirmasi = () => {
    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: async function (result) {
          console.log("Success:", result);
           const orderId = result.order_id; // Dapatkan orderId dari hasil response

          // Pengecekan status transaksi setelah pembayaran berhasil
          const transactionStatus = await checkTransactionStatus(orderId);

          // Jika status transaksi 'settlement', arahkan ke halaman PaymentSuccess
          if (transactionStatus === "settlement") {
            await handleTopupAfterPayment(orderId);
          }
        },
        onPending: function (result) {
          console.log("Pending:", result);
        },
        onError: function (result) {
          console.log("Error:", result);
        },
        onClose: function () {
          console.log("Popup ditutup.");
        },
      });
    } else {
      alert("Token tidak tersedia.");
    }
  };

  const handleTopupAfterPayment = async (orderId) => {
    try {
      // 1. Kirim permintaan topup ke backend
      const topupResponse = await fetch("/api/payment/topup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          userId,
          zoneId,
          product_code: selectedTopup?.raw?.product_code,
        }),
      });
  
      const topupResult = await topupResponse.json();
  
      if (!topupResponse.ok) {
        alert("Top-up gagal: " + (topupResult.message || "Tidak diketahui"));
        return;
      }
  
      // 2. Mulai polling status setiap 3 detik
      const maxAttempts = 10; // maksimal 10x percobaan (~30 detik)
      let attempts = 0;
      const interval = setInterval(async () => {
        attempts++;
  
        const statusResponse = await fetch(`/api/payment/check-status/${orderId}`);
        const statusResult = await statusResponse.json();
        const status = statusResult?.data?.topupStatus;
        const message = statusResult?.data?.message || "Tanpa pesan";
  
        console.log(`Percobaan ${attempts}: Status = ${status}`);
  
        if (status === "success") {
          clearInterval(interval);
          alert("Top-up berhasil: " + message);
          navigate(`/payment/success/${orderId}`);
        } else if (status === "failed") {
          clearInterval(interval);
          alert("Top-up gagal: " + message);
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          alert("Top-up masih diproses, silakan cek kembali nanti.");
        }
  
        // Jika status === 0 (PROCESS), lanjut polling
      }, 3000);
    } catch (err) {
      console.error("Top-up error:", err);
      alert("Terjadi kesalahan saat top-up.");
    }
  };
  

  // Fungsi untuk mengecek status transaksi
  const checkTransactionStatus = async (orderId) => {
    try {
      const response = await fetch(
        `/api/payment/status/${orderId}`
      );
      const result = await response.json();
      const transactionStatus = result.status || result.data?.transaction_status;

      console.log("Transaction status from backend:", transactionStatus);
      return transactionStatus; // Mengembalikan status transaksi
    } catch (error) {
      console.error("Error checking transaction status:", error);
      return null; // Mengembalikan null jika terjadi error
    }
  };

  return (
    <Modal
      show={open}
      size="md"
      onClose={onClose}
      // backdropClasses="hidden"
      className="fixed inset-0 flex items-center justify-center z-50 h-screen pt-[25%] md:pt-0 overflow-hidden !bg-none"
    >
      <div className="w-full max-w-md mx-auto animate-fade-in">
        <ModalHeader className="bg-gray-200 !border-b-0">
          <div className="font-bold text-black">Detail Pesanan</div>
        </ModalHeader>
        <ModalBody className="-mt-5 bg-gray-200">
          <Label className="!text-black text-xs md:text-md">
            Mohon konfirmasi Username anda sudah benar.
          </Label>
          <div className="my-2 space-y-4">
            {/* Diamond */}
            <div className="flex items-center gap-3 p-3 my-4 bg-purple-800 rounded-lg shadow-sm">
              <img
                src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
                alt="logo dm"
                className="w-6 h-6 md:h-8 md:w-8"
              />
              <Label className="!text-white text-sm md:text-lg font-semibold">
                {selectedTopup?.value || 0} Diamond
              </Label>
            </div>

            {/* Info Detail Pemesanan */}
            <div className="space-y-3 text-sm text-white">
              <div className="flex justify-between px-2 pb-2 text-xs text-black border-b border-gray-500/30 md:text-md">
                <span>Nickname:</span>
                <span className="font-semibold">
                  {nickname || "Belum ditemukan"}
                </span>
              </div>
              <div className="flex justify-between px-2 pb-2 text-xs text-black border-b border-gray-500/30 md:text-md">
                <span>ID:</span>
                <span className="font-semibold">
                  {userId} ({zoneId})
                </span>
              </div>
              <div className="flex justify-between px-2 pb-2 text-xs text-black border-b border-gray-500/30 md:text-md">
                <span>Harga:</span>
                <span className="font-semibold">
                  {numberToRupiah(taxableAmount)}
                </span>
              </div>
              <div className="flex justify-between px-2 pt-2 -mt-2 text-xs text-black md:text-md">
                <span>Pajak (11%):</span>
                <span className="font-semibold">{numberToRupiah(tax)}</span>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter
          className="bg-gray-200 !border-t-0"
          style={{ filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.75))" }}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col justify-center gap-1">
              <p className="text-sm font-light md:text-md">Total Pembayaran</p>
              <h1 className="font-semibold text-md md:text-lg">
                {numberToRupiah(grossAmount)}
              </h1>
            </div>
            <Button
              onClick={handleKonfirmasi}
              className="text-sm cursor-pointer w-25 md:w-30 md:text-md rounded-3xl"
            >
              Bayar
            </Button>
          </div>
        </ModalFooter>
      </div>
    </Modal>
  );
};

export default ModalDetailPesanan;
