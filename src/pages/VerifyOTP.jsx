import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/api";

function VerifyOTP() {

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  async function handleVerify() {

    const res = await verifyOtp({ email, otp });

    if (res.error) {
      setMessage(res.error);
    } else {
      setMessage("Verified successfully!");
      
      // go to login
      setTimeout(() => navigate("/login"), 1500);
    }
  }

  return (
    <div>

      <h2>Verify OTP</h2>

      <p>Enter the 6-digit code sent to {email}</p>

      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={handleVerify}>Verify</button>

      <p>{message}</p>

    </div>
  );
}

export default VerifyOTP;
