import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

const QRCode = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("1FegPwpTXbcqkRnFoaD9qJRpqaScHw1XcT")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <QRCodeSVG value={`bitcoin:1FegPwpTXbcqkRnFoaD9qJRpqaScHw1XcT`} size={256} />
      <strong className="my-6 text-sm text-center">
        Scan QR Code or click address below to copy address <br /> and make deposit to wallet address.
      </strong>
      <strong className="text-sm text-left mb-1">Wallet Address</strong>
      <p className=" text-primary text-base text-center cursor-pointer font-bold mb-4" onClick={handleCopy}>
        {copied ? (
          <p className="text-green-600">Address copied!</p>
        ) : (
          <p className="flex items-center gap-x-4">
            1FegPwpTXbcqkRnFoaD9qJRpqaScHw1XcT{" "}
            <span>
              <FaRegCopy />
            </span>
          </p>
        )}
      </p>
      <strong className="my-4 text-sm text-center">Click continue button after payment has been made.</strong>
    </div>
  );
};

export default QRCode;
