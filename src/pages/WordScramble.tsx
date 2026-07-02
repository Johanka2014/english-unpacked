import { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shuffle, RotateCcw, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Everyday" | "Travel" | "Business";

interface LetterSet {
  category: Category;
  letters: string[];
}

const LETTER_SETS: LetterSet[] = [
  // Everyday
  { category: "Everyday", letters: ["A", "N", "I", "M", "A", "L", "S"] },
  { category: "Everyday", letters: ["K", "I", "T", "C", "H", "E", "N"] },
  { category: "Everyday", letters: ["W", "E", "A", "T", "H", "E", "R"] },
  { category: "Everyday", letters: ["S", "C", "H", "O", "O", "L", "S"] },
  { category: "Everyday", letters: ["F", "R", "I", "E", "N", "D", "S"] },
  // Travel
  { category: "Travel", letters: ["A", "I", "R", "P", "O", "R", "T"] },
  { category: "Travel", letters: ["S", "T", "A", "T", "I", "O", "N"] },
  { category: "Travel", letters: ["H", "O", "L", "I", "D", "A", "Y"] },
  { category: "Travel", letters: ["S", "U", "I", "T", "C", "A", "S"] },
  { category: "Travel", letters: ["T", "I", "C", "K", "E", "T", "S"] },
  // Business
  { category: "Business", letters: ["M", "E", "E", "T", "I", "N", "G"] },
  { category: "Business", letters: ["P", "R", "O", "J", "E", "C", "T"] },
  { category: "Business", letters: ["M", "A", "N", "A", "G", "E", "R"] },
  { category: "Business", letters: ["C", "L", "I", "E", "N", "T", "S"] },
  { category: "Business", letters: ["I", "N", "V", "O", "I", "C", "E"] },
];

const GAME_SECONDS = 60;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isValidFormation(word: string, letters: string[]): boolean {
  const counts: Record<string, number> = {};
  for (const l of letters) counts[l] = (counts[l] || 0) + 1;
  for (const c of word) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
}

type MessageType = "success" | "error" | "info" | null;

const WordScramble = () => {
  const [set, setSet] = useState<LetterSet>(() => LETTER_SETS[Math.floor(Math.random() * LETTER_SETS.length)]);
  const [displayLetters, setDisplayLetters] = useState<string[]>(() => shuffleArray(set.letters));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [gameActive, setGameActive] = useState(true);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<{ text: string; type: MessageType }>({ text: "Game started!", type: "info" });
  const [shake, setShake] = useState(false);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageTimerRef = useRef<number | null>(null);

  // Timer
  useEffect(() => {
    if (!gameActive) return;
    const id = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(id);
          setGameActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive && timeLeft === 0) {
      setMessage({ text: `Time's up! Final score: ${score}`, type: "info" });
    }
  }, [gameActive, timeLeft, score]);

  const showMessage = useCallback((text: string, type: MessageType, duration = 1500) => {
    setMessage({ text, type });
    if (messageTimerRef.current) window.clearTimeout(messageTimerRef.current);
    if (duration) {
      messageTimerRef.current = window.setTimeout(() => setMessage({ text: "", type: null }), duration);
    }
  }, []);

  const startNewGame = useCallback(() => {
    if (messageTimerRef.current) window.clearTimeout(messageTimerRef.current);
    const next = LETTER_SETS[Math.floor(Math.random() * LETTER_SETS.length)];
    setSet(next);
    setDisplayLetters(shuffleArray(next.letters));
    setScore(0);
    setTimeLeft(GAME_SECONDS);
    setInput("");
    setFoundWords([]);
    setGameActive(true);
    setMessage({ text: "New game!", type: "info" });
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  const handleShuffle = () => {
    if (!gameActive) return;
    setDisplayLetters((l) => shuffleArray(l));
  };

  const triggerShake = () => {
    setShake(true);
    window.setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = () => {
    if (!gameActive) return;
    const word = input.toUpperCase().trim();
    setInput("");

    if (word.length < 3) {
      showMessage("Word too short (min 3 letters)", "error");
      triggerShake();
      return;
    }
    if (foundWords.includes(word)) {
      showMessage("Already used!", "error");
      triggerShake();
      return;
    }
    if (isValidFormation(word, set.letters)) {
      setScore((s) => s + word.length);
      setFoundWords((f) => [word, ...f]);
      showMessage(`+${word.length} points!`, "success");
    } else {
      showMessage("Can't form that word", "error");
      triggerShake();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const lowTime = timeLeft <= 10;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Word Scramble Game - Practice English Vocabulary"
        description="Fun timed word-building game. Rearrange letters to score points in 60 seconds. Themed sets for everyday, travel and business English."
        canonical="https://english-unpacked.lovable.app/word-scramble"
      />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-10">
        <header className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-merriweather text-brand-navy mb-2">
            Word Scramble
          </h1>
          <p className="text-muted-foreground">
            Build as many words as you can from the letters below in 60 seconds. Longer words score more.
          </p>
        </header>

        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              {/* Header row */}
              <div className="flex justify-between items-center mb-6">
                <Badge variant="secondary" className="text-sm">
                  {set.category}
                </Badge>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-muted-foreground">SCORE</div>
                    <div className="text-2xl font-bold text-foreground">{score}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-muted-foreground">TIMER</div>
                    <div className={cn("text-2xl font-bold", lowTime ? "text-destructive" : "text-foreground")}>
                      {timeLeft}
                    </div>
                  </div>
                </div>
              </div>

              {/* Letter tiles */}
              <div className="flex justify-center items-center gap-2 mb-6 h-16">
                {displayLetters.map((letter, i) => (
                  <div
                    key={`${letter}-${i}`}
                    className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-muted text-foreground text-xl md:text-2xl font-bold rounded-lg shadow-sm"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className={cn("mb-3", shake && "animate-[shake_0.5s]")}>
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  disabled={!gameActive}
                  placeholder="Type a word and press Enter…"
                  className="text-lg h-12"
                  aria-label="Word input"
                />
              </div>

              {/* Message */}
              <div className="h-6 mb-3 text-center text-sm font-semibold">
                {message.text && (
                  <span
                    className={cn(
                      message.type === "success" && "text-green-600",
                      message.type === "error" && "text-destructive",
                      message.type === "info" && "text-brand-royal",
                    )}
                  >
                    {message.text}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleSubmit}
                  disabled={!gameActive}
                  className="bg-brand-royal hover:bg-brand-navy text-white"
                >
                  <Send className="w-4 h-4 mr-2" /> Submit
                </Button>
                <Button onClick={handleShuffle} disabled={!gameActive} variant="secondary">
                  <Shuffle className="w-4 h-4 mr-2" /> Shuffle
                </Button>
              </div>

              <Button onClick={startNewGame} variant="outline" className="w-full mt-3">
                <RotateCcw className="w-4 h-4 mr-2" /> New Game
              </Button>

              {/* Found words */}
              {foundWords.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    WORDS FOUND ({foundWords.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {foundWords.map((w) => (
                      <Badge key={w} variant="outline">{w}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default WordScramble;
