import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import CardTopup from "../components/CardTopup";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import CardPayment from "../components/CardPayment";
import ModalDetailPesanan from "../components/ModalDetailPesanan";

const Topup_ml = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Top Up Mobile Legends | Paper Fires Store";
  }, []);
  
  return (
    <div className="bg-gray-400 w-full">
      {/* Banner */}
      <div className="px-20 flex flex-col gap-20">
        <div className="w-full relative flex justify-center mt-10">
          <img
            src="https://i.pinimg.com/736x/cd/54/ef/cd54efa2496b840ace4800f214708847.jpg"
            alt="Banner Mobile Legends"
            className=" object-cover object-center h-[490px] w-[1470px] bg-gray-300 rounded-2xl"
          />
        </div>

        <div className="w-full mb-4 grid grid-cols-2 md:grid-cols-3 gap-15">
          {/* Step 1 */}
          <div className="col-span-2 ">
            <HeaderBar step={1} label={"Pilih Nominal"} width={"w-full"} />
            <CardTopup />
          </div>

          {/* Step 2 */}
          <div className="col-span-1  flex flex-col items-center gap-5">
            <HeaderBar step={2} label={"Masukan Player ID"} width={"w-full"} />
            <Card className="max-w-md w-full !bg-purple-900">
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label className="text-xs">
                      *Isikan Player ID dan ID Zona sesuai akun anda.
                    </Label>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <div className="col-span-2">
                    <input
                      id="idplayer"
                      type="number"
                      placeholder="ID Player"
                      required
                      className="bg-white rounded-lg w-full h-10 p-3 text-center text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-purple-200"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      id="idzonaplayer"
                      type="number"
                      placeholder="ID Player"
                      required
                      className="bg-white rounded-lg w-full h-10 p-3 text-center text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-purple-200"
                    />
                  </div>
                </div>
                <p className="text-white text-xs">
                  Untuk menemukan ID Anda, klik pada ikon karakter. User ID
                  tercantum di bawah nama karakter Anda. Contoh:
                  '536326644(1234)'.
                </p>
              </form>
            </Card>

            {/* Step 3 */}
            <HeaderBar step={3} label={"Pilih Pembayaran"} width={"w-full"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CardPayment
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png"
                }
                title={"QRIS"}
                active={selectedPayment === "QRIS"}
                onClick={() => setSelectedPayment("QRIS")}
              />
              <CardPayment
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png"
                }
                title={"DANA"}
                active={selectedPayment === "DANA"}
                onClick={() => setSelectedPayment("DANA")}
              />
              <CardPayment
                img={
                  "https://antinomi.org/wp-content/uploads/2022/03/logo-gopay-vector.png"
                }
                title={"GOPAY"}
                active={selectedPayment === "GOPAY"}
                onClick={() => setSelectedPayment("GOPAY")}
              />
              <CardPayment
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
                }
                title={"MANDIRI"}
                active={selectedPayment === "MANDIRI"}
                onClick={() => setSelectedPayment("MANDIRI")}
              />
            </div>

            {/* Step 4 */}
            <HeaderBar step={4} label={"Beli"} width={"w-full"} />
            <Card className="!bg-purple-900 max-w-md w-full">
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-4 block">
                    <Label htmlFor="inputWa" className="text-xs">
                      Opsional: Jika anda ingin mendapatkan bukti pembayaran
                      atas pembelian anda, harap mengisi nomer whatsapp kamu.
                    </Label>
                    <p className="text-xs text-gray-300 mt-2">
                      Format nomor:{" "}
                      <span className="font-medium text-white">
                        +6281234567890
                      </span>
                    </p>
                  </div>
                  <input
                    id="idplayer"
                    type="tel"
                    placeholder="Harap Masukan Nomer Whatsapp"
                    required
                    className="bg-white rounded-lg w-full h-10 p-3 text-center text-xs placeholder-gray-400  focus:outline-none focus:ring-1 focus:border-purple-200"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="AccWa"
                    className="!bg-purple-900 !border-1 !border-white focus:ring-2 hover:!bg-gray-600"
                  />
                  <p className="text-white text-xs">
                    Ya, Saya ingin menerima berita dan promosi dari Whatsapp
                  </p>
                </div>
                <Button
                  type="submit"
                  className="h-9 w-35 self-end cursor-pointer rounded-3xl text-md"
                  onClick={() => setOpenModal(true)}
                >
                  Beli
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal Detail Pesanan */}
      <ModalDetailPesanan
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Topup_ml;
