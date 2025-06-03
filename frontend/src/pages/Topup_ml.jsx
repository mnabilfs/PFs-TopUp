import React, { useEffect, useState, useRef, useCallback } from "react";
import HeaderBar from "../components/HeaderBar";
import CardTopup from "../components/CardTopup";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import CardPayment from "../components/CardPayment";
import ModalDetailPesanan from "../components/ModalDetailPesanan";
import FooterUniversal from "../components/FooterUniversal";
import Navbar from "../components/NavBar";

const Topup_ml = () => {
  const [selectedTopup, setSelectedTopup] = useState(null);
  const [snapToken, setSnapToken] = useState("");
  const [waNumber, setWaNumber] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [nickname, setNickname] = useState(null);
  const [formError, setFormError] = useState(false);
  const [userIdError, setUserIdError] = useState("");
  const [zoneIdError, setZoneIdError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const step2Ref = useRef(null);

  const handleBuyClick = async () => {
    setUserIdError("");
    setZoneIdError("");
    setNicknameError("");

    // Validasi input User ID dan Zone ID
    if (!userId || !zoneId) {
      setFormError(true);
      step2Ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (userId.length !== 9) {
      setFormError(false);
      setUserIdError("*Format ID salah. Isikan sesuai format yang benar.");
      step2Ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (zoneId.length !== 4) {
      setFormError(false);
      setZoneIdError("*Format ID salah. Isikan sesuai format yang benar.");
      step2Ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Tunggu pengecekan nickname dan jika ada error, beri pesan
    if (nicknameError) {
      setFormError(true); // Set error jika nickname tidak ditemukan
      step2Ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setFormError(false);

    try {
      const response = await fetch("http://localhost:5000/api/payment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          zoneId,
          waNumber,
          selectedTopup,
        }),
      });

      const data = await response.json();

      if (data.token) {
        setSnapToken(data.token); // ✅ simpan token
        setOpenModal(true); // ✅ buka modal konfirmasi setelah nickname berhasil
      } else {
        alert("Gagal memproses transaksi. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error saat memproses pembayaran:", error);
      alert("Terjadi kesalahan saat menghubungkan ke server.");
    }
  };

  const handleLookup = useCallback(async () => {
    if (!userId || !zoneId) return;

    try {
      const response = await fetch(
        `https://api.isan.eu.org/nickname/ml?id=${userId}&zone=${zoneId}`
      );
      const data = await response.json();

      if (data.success && data.name) {
        setNickname(data.name); // Simpan nickname jika ditemukan
        setNicknameError(""); // Reset error
      } else {
        setNickname(""); // Set nickname kosong
        setNicknameError("*Nickname tidak ditemukan"); // Set error message jika nickname tidak ditemukan
      }
    } catch (error) {
      console.error("Error saat mengambil data user:", error);
      setNickname(""); // Set nickname kosong jika error
      setNicknameError("Gagal mengambil data");
    }
  }, [userId, zoneId]); // Memastikan handleLookup hanya berubah ketika userId dan zoneId berubah

  useEffect(() => {
    document.title = "Top Up Mobile Legends | Paper Fires Store";
  }, []);

  useEffect(() => {
    if (userId && zoneId) {
      handleLookup();
    }
  }, [userId, zoneId, handleLookup]);

  useEffect(() => {
    // Reset nicknameError and nickname if userId or zoneId is empty
    if (!userId || !zoneId) {
      setNicknameError("");
      setNickname("");
    }
  }, [userId, zoneId]);

  return (
    <div className="w-full bg-gray-800">
      <Navbar />
      <div className="flex flex-col gap-5 px-2 md:px-15 md:gap-10">
        {/* Banner */}
        <div className="relative flex justify-center w-full mt-10 md:w-full">
          <img
            src="https://i.pinimg.com/736x/cd/54/ef/cd54efa2496b840ace4800f214708847.jpg"
            alt="Banner Mobile Legends"
            className="object-cover object-center w-full h-auto md:h-[490px] md:w-[1470px] rounded-2xl"
          />
        </div>

        {/* Grid layout */}
        <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-3 md:gap-8 ">
          {/* Step 1 */}
          <div className="col-span-1 md:col-span-2 rounded-xl">
            <HeaderBar step={1} label={"Pilih Nominal"} width={"w-full"} />
            <CardTopup
              selectedTopup={selectedTopup}
              setSelectedTopup={setSelectedTopup}
            />
          </div>

          {/* Wrapper Steps 2, 3, and 4 */}
          <div className="flex flex-col col-span-1 gap-5 mt-5 md:mt-0 md:col-span-1 md:gap-5">
            {/* Step 2 */}
            <div
              ref={step2Ref}
              className="flex flex-col items-center w-full gap-5 rounded-xl"
            >
              <HeaderBar step={2} label={"Masukan User ID"} width={"w-full"} />
              <Card className=" w-full !bg-purple-900 !border-purple-900">
                <form className="flex flex-col gap-4">
                  <div>
                    <div className="block">
                      <Label className="text-xs text-white">
                        *Isikan User ID dan ID Zona sesuai akun anda.
                      </Label>
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <input
                        id="idplayer"
                        type="number"
                        placeholder="Masukan User ID"
                        value={userId}
                        onChange={(e) => {
                          const value = e.target.value.slice(0, 9);
                          setUserId(value);
                        }}
                        required
                        className="w-full h-8 p-3 text-xs tracking-wide text-center placeholder-gray-400 bg-white rounded-lg md:h-10 focus:outline-none focus:ring-1 focus:border-purple-200"
                      />
                    </div>
                    <div className="col-span-1">
                      <input
                        id="idserverplayer"
                        type="number"
                        placeholder="Zone ID"
                        value={zoneId}
                        onChange={(e) => {
                          const value = e.target.value.slice(0, 4);
                          setZoneId(value);
                        }}
                        required
                        className="w-full h-8 p-3 text-xs tracking-wide text-center placeholder-gray-400 bg-white rounded-lg md:h-10 focus:outline-none focus:ring-1 focus:border-purple-200"
                      />
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs text-red-500">
                      *User ID dan Zone ID harus diisi.
                    </p>
                  )}
                  {userIdError && (
                    <p className="text-xs text-red-500">{userIdError}</p>
                  )}
                  {zoneIdError && (
                    <p className="text-xs text-red-500">{zoneIdError}</p>
                  )}

                  {/* Menampilkan Nickname */}
                  {nicknameError ? (
                    <p className="text-xs text-red-500">{nicknameError}</p> // Menampilkan pesan error jika ada
                  ) : (
                    nickname && (
                      <p className="text-xs text-white">Nickname: {nickname}</p>
                    ) // Menampilkan nickname jika tidak ada error
                  )}
                  <p className="text-xs text-white">
                    Untuk menemukan ID Anda, klik pada ikon karakter. User ID
                    tercantum di bawah nama karakter Anda. Contoh:
                    '536326644(1234)'.
                  </p>
                </form>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-full gap-5 rounded-xl">
              <HeaderBar step={3} label={"Beli"} width={"w-full"} />
              <Card className="!bg-purple-900 !border-purple-900 w-full">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleBuyClick();
                  }}
                >
                  <div>
                    <div className="block mb-4">
                      <Label htmlFor="inputWa" className="text-xs text-white">
                        Opsional: Jika ingin mendapatkan bukti pembayaran atas
                        pembelian anda, harap mengisi nomer whatsapp kamu.
                      </Label>
                      <p className="mt-2 text-xs text-gray-300">
                        Format nomor:{" "}
                        <span className="text-xs font-medium text-white ">
                          6281234567890
                        </span>
                      </p>
                    </div>
                    <input
                      id="idplayer"
                      type="tel"
                      placeholder="Harap Masukan Nomer Whatsapp"
                      value={waNumber}
                      onChange={(e) => {
                        const value = e.target.value.slice(0, 13);
                        setWaNumber(value);
                      }}
                      className="w-full p-3 text-xs tracking-wide text-center placeholder-gray-400 bg-white rounded-lg h-9 md:h-10 focus:outline-none focus:ring-1 focus:border-purple-200"
                    />
                  </div>

                  <div className="flex items-center gap-2 md:gap-1">
                    <Checkbox
                      id="AccWa"
                      className="!bg-purple-900 !border-1 !border-white focus:ring-2 hover:!bg-gray-600 w-6 h-4.5 md:w-4 md:h-4"
                    />
                    <p className="text-xs text-white">
                      Ya, Saya ingin menerima berita dan promosi dari Whatsapp
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="self-end cursor-pointer h-9 w-35 rounded-3xl text-md"
                    onClick={handleBuyClick}
                    disabled={nicknameError !== ""}
                  >
                    Beli
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <FooterUniversal />

      {/* Modal Detail Pesanan */}
      {!nicknameError && (
        <ModalDetailPesanan
          open={openModal}
          onClose={() => setOpenModal(false)}
          data={{
            selectedTopup,
            userId,
            zoneId,
            waNumber,
          }}
          userId={userId}
          zoneId={zoneId}
          nickname={nickname}
          snapToken={snapToken}
        />
      )}
    </div>
  );
};

export default Topup_ml;
