import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
} from "flowbite-react";

const ModalDetailPesanan = ({ open, onClose, data }) => {
  const { selectedTopup, playerID, zoneID, selectedPayment } = data;
  const tax = selectedTopup ? selectedTopup.price * 0.12 : 0;
  const total = selectedTopup ? selectedTopup.price + tax : 0;
  return (
    <Modal show={open} size="md" onClose={onClose}>
      <ModalHeader className="bg-gray-200 !border-b-0">
        <div className="text-black font-bold">Detail Pesanan</div>
      </ModalHeader>
      <ModalBody className="bg-gray-200">
        <Label className="!text-black">
          Mohon konfirmasi Username anda sudah benar.
        </Label>
        <div className="space-y-4 my-2">
          {/* Diamond */}
          <div className="flex items-center gap-3 bg-purple-800 p-3 my-4 rounded-lg shadow-sm">
            <img
              src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
              alt="logo dm"
              className="h-8 w-8"
            />
            <Label className="!text-white text-lg font-semibold">
            {selectedTopup?.value || 0} Diamond
            </Label>
          </div>

          {/* Info Detail Pemesanan */}
          <div className="space-y-3 text-white text-sm">
            <div className="flex justify-between border-b border-gray-500/30 pb-2 text-black px-2">
              <span>Nickname:</span>
              <span className="font-semibold">Vorenzy</span>
            </div>
            <div className="flex justify-between border-b border-gray-500/30 pb-2 text-black px-2">
              <span>ID:</span>
              <span className="font-semibold">{playerID} ({zoneID})</span>
            </div>
            <div className="flex justify-between border-b border-gray-500/30 pb-2 text-black px-2">
              <span>Bayar dengan:</span>
              <span className="font-semibold">{selectedPayment}</span>
            </div>
            <div className="flex justify-between border-b border-gray-500/30 pb-2 text-black px-2">
              <span>Harga:</span>
              <span className="font-semibold">Rp {selectedTopup?.price?.toLocaleString("id-ID") || 0}</span>
            </div>
            <div className="flex justify-between pt-2 text-black px-2 -mt-2">
              <span>Pajak (12%):</span>
              <span className="font-semibold">Rp {tax.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter
        className="bg-gray-200 !border-t-0"
        style={{ filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.75))" }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col justify-center gap-1">
            <p className="font-light">Total Pembayaran</p>
            <h1 className="font-semibold">Rp. {total.toLocaleString("id-ID")}</h1>
          </div>
          <Button onClick={onClose} className="w-30 cursor-pointer rounded-3xl">
            Konfirm
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDetailPesanan;
