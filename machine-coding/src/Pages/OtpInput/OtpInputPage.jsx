import { OtpInput } from "./OtpInput";

export const OtpInputPage = () => {
  return (
    <div>
      <h2>Correct Value: 123456</h2>
      <OtpInput length={6} value="123456" />
    </div>
  );
};
