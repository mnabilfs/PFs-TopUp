import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import FooterPaymentSuccess from "../components/FooterPaymentSuccess";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";

const PaymentSuccess = () => {
  const [transactionData, setTransactionData] = useState(null);
  const navigate = useNavigate();
  const { orderId } = useParams();

  const getPaymentLabel = (data) => {
    if (!data) return "-";
    if (data.payment_type === "echannel") return "Mandiri Virtual Account";
    if (data.payment_type === "bank_transfer") {
      return `${data.va_numbers?.[0]?.bank?.toUpperCase()} Virtual Account`;
    }
    if (data.payment_type === "qris") return "QRIS";
    return data.payment_type.toUpperCase();
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    console.log("Order ID:", orderId);
  }, [orderId]);

  useEffect(() => {
    document.title = "Payment Success Topup Mobile Legends";
  }, []);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(
          `/api/payment/status/${orderId}`
        );
        const result = await response.json();
        setTransactionData(result.data);
        console.log("✅ Data transaksi:", result.data);
      } catch (error) {
        console.error("❌ Gagal ambil status transaksi:", error);
      }
    };

    if (orderId) fetchTransaction();
  }, [orderId]);

  const grossAmount = Number(transactionData?.gross_amount || 0);
  const tax = Math.round(grossAmount - grossAmount / 1.11);
  const taxableAmount = grossAmount - tax;

  return (
    <>
      <div className="w-full min-h-screen bg-purple-900">
        <Navbar />
        <div className="relative flex flex-col items-center justify-center w-full gap-2 px-4 text-center text-white bg-green-500 py-15 md:py-16 lg:py-25">
          <div className="animate-spin">
            <svg
              className="w-10 h-10 text-yellow-300 md:w-12 md:h-12"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          </div>

          <h1 className="mb-2 text-xl font-extrabold tracking-wide text-purple-900 uppercase md:text-2xl lg:text-3xl">
            ORDER ITEM BERHASIL
          </h1>

          <p className="max-w-lg text-sm text-white md:text-base lg:text-lg">
            Top up sudah ditambahkan ke akun Mobile Legends: Bang Bang Anda.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-4 text-xs font-medium text-center text-white md:px-4 lg:px-4 md:text-sm bg-green-400/80">
          <p className="max-w-5xl mb-2">
            Diamonds telah ditambahkan ke akun Mobile Legends Anda. Jika masih
            belum masuk, mohon re-login dan cek kembali.
          </p>
          <p>
            Butuh bantuan? kunjungi{" "}
            <a
              href="#"
              className="text-yellow-300 underline hover:text-yellow-400"
            >
              Pusat Bantuan
            </a>{" "}
            kami.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 px-4 pt-10 md:px-10">
          <h1 className="text-xl font-bold tracking-tight text-center text-white md:text-3xl">
            RINGKASAN PEMESANAN
          </h1>

          <Card className="w-full max-w-md md:max-w-xl !bg-gray-50 md:px-6 md:py-4 shadow-xl">
            <h1 className="text-sm text-gray-900 md:text-base">
              Pembelian Anda
            </h1>
            <p className="text-xl font-semibold text-gray-700">
              {transactionData?.item_name || "-"}
            </p>

            <div className="grid grid-cols-2 mt-1 text-sm gap-y-2">
              <div className="flex flex-col gap-1">
                <p>Merchant</p>
                <p>Payment Method</p>
                <p>Total Amount</p>
              </div>
              <div className="flex flex-col gap-1 font-medium text-right">
                <p>Mobile Legends</p>
                <p>{getPaymentLabel(transactionData)}</p>
                <p className="text-cyan-600">
                  {transactionData ? numberToRupiah(grossAmount) : "-"}
                </p>
              </div>
            </div>
          </Card>

          <div className="w-full max-w-xl mb-8 space-y-4 text-white/90 bg-[#3B0073] p-7 md:p-10 rounded-xl flex flex-col justify-center">
            <h2 className="mb-8 text-lg font-semibold">Rincian Tagihan</h2>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Nomor Tagihan</p>
              <p className="text-sm break-words">{transactionData?.order_id}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Tanggal Pembayaran</p>
              <p className="text-sm text-white/90">
                {transactionData?.transaction_time
                  ? new Date(transactionData.transaction_time).toLocaleString(
                      "id-ID"
                    )
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Item</p>
              <p className="text-sm text-white/90">
                {transactionData?.item_name || "-"}
              </p>
            </div>
            <div className="w-full max-w-lg p-2 text-white md:p-5 rounded-xl">
              <div className="grid grid-cols-2 mb-4 text-sm font-semibold">
                <p>Kesatuan</p>
                <p className="text-right">Nominal</p>
              </div>
              <div className="grid grid-cols-2 mb-6 space-y-2 text-sm text-white/90">
                <p>Harga</p>
                <p className="text-right">{numberToRupiah(taxableAmount)}</p>
                <p>Tarif pajak</p>
                <p className="text-right">11 %</p>
                <p>Nominal pajak</p>
                <p className="text-right">{numberToRupiah(tax)}</p>
              </div>
              <hr className="mb-2 border-white/30" />
              <div className="flex justify-between text-sm font-semibold text-white">
                <p>Jumlah Pembayaran</p>
                <p className="text-cyan-300">{numberToRupiah(grossAmount)}</p>
              </div>
              <hr className="mt-2 border-white/30" />
            </div>
            <Button
              onClick={() => navigate("/Topup_ml")}
              className="text-sm cursor-pointer rounded-3xl md:text-md"
            >
              Kembali ke Halaman Utama
            </Button>
          </div>

          <div className="w-full max-w-xl mb-15">
            <Accordion className="bg-[#3B0073] text-white rounded-xl">
              <AccordionPanel>
                <AccordionTitle className="bg-[#3B0073] text-white hover:bg-[#4c008c]">
                  Butuh Bantuan?
                </AccordionTitle>
                <AccordionContent className="bg-[#3B0073] text-white">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Jika Anda mengalami kesulitan saat menggunakan layanan kami,
                    seperti tidak menerima diamond atau kesalahan informasi,
                    silakan hubungi tim dukungan kami melalui WhatsApp atau
                    email. Kami siap membantu Anda setiap hari pukul 08.00-22.00
                    WIB.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>
                  Masalah Pembayaran dan Pembelian?
                </AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Pastikan Anda telah melakukan pembayaran sesuai instruksi
                    dan menggunakan metode pembayaran yang didukung (QRIS,
                    e-wallet, atau pulsa). Jika pembayaran sudah berhasil namun
                    item belum masuk, mohon tunggu maksimal 15 menit atau
                    hubungi layanan pelanggan dengan menyertakan nomor tagihan.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Pengumuman Pelayanan?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Selama periode promo atau maintenance, proses pengiriman
                    item dapat mengalami sedikit keterlambatan. Pantau terus
                    halaman ini atau akun media sosial kami untuk informasi
                    terbaru mengenai jadwal layanan, update sistem, dan promo
                    menarik lainnya.
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        PaperFires Store
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="nofollow"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Laman Facebook
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
        <FooterPaymentSuccess />
      </div>
    </>
  );
};

export default PaymentSuccess;
