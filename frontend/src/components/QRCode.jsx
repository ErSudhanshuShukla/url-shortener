import { QRCodeSVG } from "qrcode.react";

const QRCode = ({ value }) => {
  return (
    <div className="rounded-2xl bg-white p-4">
      <QRCodeSVG
        value={value}
        size={160}
        level="M"
        marginSize={4}
      />
    </div>
  );
};

export default QRCode;