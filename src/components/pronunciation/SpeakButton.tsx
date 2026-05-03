import { useState, useEffect } from "react";
import { Volume2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpeakButtonProps {
  text: string;
  rate?: number;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "icon";
  label?: string;
}

const SpeakButton = ({
  text,
  rate = 0.9,
  variant = "outline",
  size = "sm",
  label,
}: SpeakButtonProps) => {
  const [speaking, setSpeaking] = useState(false);
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [supported]);

  if (!supported) return null;

  const pickVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => /en[-_]GB/i.test(v.lang)) ||
      voices.find((v) => /^en/i.test(v.lang)) ||
      voices[0]
    );
  };

  const handleClick = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    // Strip stress-marker capitals for speech (keep readable text)
    const clean = text.replace(/\(([^)]+)\)/g, "$1");
    const u = new SpeechSynthesisUtterance(clean);
    u.rate = rate;
    u.pitch = 1;
    u.lang = "en-GB";
    const v = pickVoice();
    if (v) u.voice = v;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleClick}
      aria-label={label || `Listen to ${text}`}
    >
      {speaking ? <Square className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      {size !== "icon" && (
        <span className="ml-1">{speaking ? "Stop" : "Listen"}</span>
      )}
    </Button>
  );
};

export default SpeakButton;
