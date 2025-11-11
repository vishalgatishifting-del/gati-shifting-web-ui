import  {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./Captcha.scss"
import RefreshIcon from '@mui/icons-material/Refresh';

interface CaptchaProps {
  onValidate?: (isValid: boolean) => void;
}

// 👇 forwardRef lagana zaroori hai
const Captcha = forwardRef((props: CaptchaProps, ref) => {
  const { onValidate } = props;
  const [captcha, setCaptcha] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  // On mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Draw captcha on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, 150, 50);

    // Random lines
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * 150, Math.random() * 50);
      ctx.lineTo(Math.random() * 150, Math.random() * 50);
      ctx.stroke();
    }

    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "black";
    ctx.setTransform(1, 0.1, 0.1, 1, 0, 0);
    ctx.fillText(captcha, 20, 35);
  }, [captcha]);

  // ✅ validation function (yahi parent se call hoga)
  const validate = (): boolean => {
    if (userInput.toUpperCase() === captcha) {
      onValidate?.(true);
      return true;
    } else {
      onValidate?.(false);
      generateCaptcha();
      setUserInput("");
      return false;
    }
  };

  // make validate accessible to parent via ref
  useImperativeHandle(ref, () => ({
    validate,
  }));

  // Local verify button (optional)
  // const handleVerify = () => {
  //   const isValid = validate();
  //   if (isValid) alert("✅ Captcha verified successfully!");
  //   else alert("❌ Incorrect Captcha! Try again.");
  // };

  return (
    <div className="captacha-container" style={{ textAlign: "center" }}>
      <div className="captcha-char-container">
        <canvas
          ref={canvasRef}
          width={150}
          height={50}
        />

        <button type="button" className="captcha-btn"
          onClick={generateCaptcha}
        >
          <RefreshIcon />
        </button></div>
      <div>
        <input
          type="text"
          value={userInput}
          placeholder="Enter Captcha"
          onChange={(e) => setUserInput(e.target.value)}
          style={{ padding: "5px", width: "120px" }}
          className="captcha-field"
        />
      </div>
    </div>
  );
});

export default Captcha;
