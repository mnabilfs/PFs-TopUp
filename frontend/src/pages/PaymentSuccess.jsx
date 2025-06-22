import { useEffect } from "react";
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

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  useEffect(() => {
    console.log("Order ID:", orderId);
  }, [orderId]);

  return (
    <>
      <div className="w-full min-h-screen bg-purple-900">
        <Navbar />
        {/* Section 1 */}
        <div className="relative flex flex-col items-center justify-center w-full gap-2 text-center text-white bg-green-500 py-30">
          <div className="animate-spin">
            <svg
              className="w-12 h-12 text-yellow-300"
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

          <h1 className="mb-2 text-2xl font-extrabold tracking-wide text-purple-900 uppercase">
            ORDER ITEM BERHASIL
          </h1>

          <p className="text-sm text-white">
            Top up sudah ditambahkan ke akun Mobile Legends: Bang Bang Anda.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-4 text-sm font-medium text-white px-auto bg-green-400/80">
          <p className="mb-2">
            Diamonds telah ditambahkan ke akun Mobile Legends anda. Jika masih
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

        {/* Section 2 */}
        <div className="flex flex-col items-center gap-6 px-4 pt-10 md:px-10">
          <h1 className="text-xl font-bold tracking-tight text-center text-white md:text-3xl">
            RINGKASAN PEMESANAN
          </h1>

          <Card className="w-full max-w-md md:max-w-xl !bg-gray-50 md:px-6 md:py-4 shadow-xl">
            <h1 className="text-sm text-gray-900 md:text-base">
              Pembelian Anda
            </h1>
            <p className="text-xl font-semibold text-gray-700">5 Diamond</p>

            <div className="grid grid-cols-2 mt-1 text-sm gap-y-2">
              <div className="flex flex-col gap-1">
                <p>Merchant</p>
                <p>Payment Method</p>
                <p>Total Amount</p>
              </div>
              <div className="flex flex-col gap-1 font-medium text-right">
                <p>Mobile Legends</p>
                <p>QRIS</p>
                <p className="text-cyan-600">Rp. 1.579</p>
              </div>
            </div>
          </Card>

          <div className="w-full max-w-xl mb-8 space-y-4 text-white/90 bg-[#3B0073] p-7 md:p-10 rounded-xl flex flex-col justify-center">
            <h2 className="mb-8 text-lg font-semibold">Rincian Tagihan</h2>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold">Nomor Tagihan</p>
              <p className="text-sm break-words ">{orderId}</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold">Tanggal Pembayaran</p>
              <p className="text-sm text-white/90 ">24/03/2025 10.06 PM</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold">Item</p>
              <p className="text-sm text-white/90 ">5 Diamonds</p>
            </div>
            <div className="w-full max-w-lg p-2 text-white md:p-5 rounded-xl">
              <div className="grid grid-cols-2 mb-4 text-sm font-semibold">
                <p>Kesatuan</p>
                <p className="text-right">Nominal</p>
              </div>

              <div className="grid grid-cols-2 mb-6 space-y-2 text-sm text-white/90">
                <p>Nilai kena pajak</p>
                <p className="text-right">Rp. 1.423</p>

                <p>Tarif pajak</p>
                <p className="text-right">11.0 %</p>

                <p>Nominal pajak</p>
                <p className="text-right">Rp. 156</p>
              </div>

              <hr className="mb-2 border-white/30" />

              <div className="flex justify-between text-sm font-semibold text-white">
                <p>Jumlah Pembayaran</p>
                <p className="text-cyan-300">Rp. 1.579</p>
              </div>

              <hr className="mt-2 border-white/30" />
            </div>
            <Button
              type="submit"
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
