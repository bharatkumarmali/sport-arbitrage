"use client"
import { useState, useRef, KeyboardEvent, ClipboardEvent } from "react";

const OTPInput: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [tempOpt, setTempOpt] = useState<String>("")
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return; // Allow only digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field
        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === "Backspace") {
            const newOtp = [...otp];
            if (!otp[index] && index > 0) {
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputsRef.current[index - 1]?.focus();
            } else {
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault(); // Prevent default paste behavior
        const pasteData = event.clipboardData.getData("text").slice(0, 6).split("");
        const newOtp = otp.map((_, index) => pasteData[index] || "");
        setOtp(newOtp);

        // Focus the next input after the pasted text
        const lastFilledIndex = Math.min(pasteData.length - 1, 5);
        inputsRef.current[lastFilledIndex]?.focus();
    };

    const result = otp.join("")
    console.log(result);

    return (
        <div className="w-full mt-5">
            <div className="flex gap-5">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        // type="password"
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        ref={(el) => {
                            inputsRef.current[index] = el;
                        }}
                        style={{
                            width: "45px",
                            height: "45px",
                            textAlign: "center",
                            fontSize: "18px",
                            backgroundColor: "#333333",
                            font: "bold",
                            color: "white",
                            borderRadius: "7px"
                        }}
                    />
                ))}
            </div>
            {/* <p>Entered OTP: {otp.join("")}</p> */}
        </div>
    );
};

export default OTPInput;
