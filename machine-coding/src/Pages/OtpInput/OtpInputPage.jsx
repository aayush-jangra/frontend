import { OtpInput } from "./OtpInput";

const OtpInputPage = () => {
  return (
    <div>
      <h2 style={{ color: "var(--text-primary)" }}>Correct Value: 123456</h2>
      <OtpInput length={6} value="123456" />
    </div>
  );
};

export default OtpInputPage;
