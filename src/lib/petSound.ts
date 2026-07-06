let ctx: AudioContext | null = null;
const getCtx = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  return ctx;
};

export function playTone(type: "correct" | "wrong" | "win", enabled = true) {
  if (!enabled) return;
  const c = getCtx();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.connect(g);
  g.connect(c.destination);
  g.gain.value = 0.08;
  if (type === "correct") {
    o.frequency.setValueAtTime(660, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(990, c.currentTime + 0.15);
  } else if (type === "wrong") {
    o.frequency.setValueAtTime(220, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(110, c.currentTime + 0.2);
  } else {
    o.frequency.setValueAtTime(523, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1046, c.currentTime + 0.4);
  }
  o.start();
  o.stop(c.currentTime + (type === "win" ? 0.5 : 0.2));
}

export function vibrate(ms: number | number[]) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(ms);
  }
}

export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}
