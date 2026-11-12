import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";
import cameraAsset from "@/assets/bb-mod5-parts-camera2.jpg.asset.json";
import printerAsset from "@/assets/bb-mod5-parts-printer.jpg.asset.json";
import laptopAsset from "@/assets/bb-mod5-parts-laptop.jpg.asset.json";
import binderAsset from "@/assets/bb-mod5-parts-binder.jpg.asset.json";

const WORDS = [
  { letter: "a", word: "battery" },
  { letter: "b", word: "buttons" },
  { letter: "c", word: "cable / lead" },
  { letter: "d", word: "CD-ROM" },
  { letter: "e", word: "cover" },
  { letter: "f", word: "focus" },
  { letter: "g", word: "lever" },
  { letter: "h", word: "memory stick" },
  { letter: "i", word: "metal ring" },
  { letter: "j", word: "screen" },
  { letter: "k", word: "switch" },
  { letter: "l", word: "toner" },
  { letter: "m", word: "zoom" },
];

const OPTION_LABEL = (letter: string, word: string) => `${letter}. ${word}`;
const WORD_BY_LETTER = Object.fromEntries(WORDS.map((w) => [w.letter, w.word]));

interface Part {
  n: number;
  letter: string;
  x: number;
  y: number;
  example?: boolean;
}

const GROUPS: { src: string; alt: string; caption: string; parts: Part[] }[] = [
  {
    src: cameraAsset.url,
    alt: "Rear view of a digital camera with the battery compartment and the memory card slot open",
    caption: "Camera",
    parts: [
      { n: 1, letter: "m", x: 14, y: 35, example: true },
      { n: 2, letter: "a", x: 70, y: 77 },
      { n: 3, letter: "f", x: 24, y: 55 },
      { n: 4, letter: "j", x: 52, y: 48 },
      { n: 5, letter: "h", x: 86, y: 49 },
    ],
  },
  {
    src: printerAsset.url,
    alt: "Office laser printer and photocopier with the scanner lid raised and the front door open",
    caption: "Printer / photocopier",
    parts: [
      { n: 6, letter: "b", x: 71, y: 26 },
      { n: 7, letter: "e", x: 53, y: 10 },
      { n: 8, letter: "k", x: 86, y: 74 },
      { n: 9, letter: "l", x: 46, y: 50 },
    ],
  },
  {
    src: laptopAsset.url,
    alt: "Laptop computer with the disc drive tray ejected holding a CD-ROM and a power cable beside it",
    caption: "Laptop",
    parts: [
      { n: 10, letter: "c", x: 88, y: 60 },
      { n: 11, letter: "d", x: 78, y: 76 },
    ],
  },
  {
    src: binderAsset.url,
    alt: "Open lever arch ring binder showing the metal arch rings and the clamping lever",
    caption: "Lever arch binder",
    parts: [
      { n: 12, letter: "i", x: 50, y: 32 },
      { n: 13, letter: "g", x: 46, y: 62 },
    ],
  },
];

const ALL_PARTS = GROUPS.flatMap((group) => group.parts);
const SCORED = ALL_PARTS.filter((part) => !part.example);

const GettingStartedEquipmentParts = () => {
  const track = useActivityTracking();
  const [answers, setAnswers] = useState<Record<string, string>>({ "1": WORD_BY_LETTER["m"] });
  const [checked, setChecked] = useState(false);

  const score = SCORED.filter((part) => answers[String(part.n)] === WORD_BY_LETTER[part.letter]).length;
  const wordFor = (letter: string) => WORD_BY_LETTER[letter];

  const focusInput = (n: number) => {
    const el = document.getElementById(`part-${n}`) as HTMLSelectElement | null;
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Getting Started</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">
          Label the parts of the objects (<strong>1–13</strong>) with the correct words from the box
          (<strong>a–m</strong>), using your dictionary if necessary. Click a number on a photo to jump
          to its answer box.
        </p>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">Words</p>
          <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {WORDS.map((item) => (
              <p key={item.letter} className="text-sm text-foreground">
                <span className="font-semibold text-primary">{item.letter}</span>&nbsp;&nbsp;{item.word}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.caption} className="space-y-3">
              <div className="relative overflow-hidden rounded-lg border bg-muted/20">
                <img
                  src={group.src}
                  alt={group.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
                {group.parts.map((part) => {
                  const value = answers[String(part.n)];
                  const correct = checked && value === wordFor(part.letter);
                  const wrong = checked && !correct;
                  return (
                    <button
                      key={part.n}
                      type="button"
                      onClick={() => focusInput(part.n)}
                      aria-label={`Part ${part.n}${part.example ? " (example)" : ""}`}
                      title={part.example ? "Example" : `Part ${part.n}`}
                      className={`absolute grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-xs font-bold text-white ring-2 ring-white transition-colors ${
                        correct
                          ? "bg-green-600"
                          : wrong
                            ? "bg-destructive"
                            : value
                              ? "bg-primary/90"
                              : "bg-primary"
                      }`}
                      style={{ left: `${part.x}%`, top: `${part.y}%` }}
                    >
                      {part.n}
                    </button>
                  );
                })}
              </div>

              <p className="text-sm font-semibold text-foreground">{group.caption}</p>

              <div className="space-y-2">
                {group.parts.map((part) => {
                  const value = answers[String(part.n)];
                  const correct = checked && value === wordFor(part.letter);
                  const wrong = checked && !correct;
                  return (
                    <div key={part.n} className="flex items-center gap-2">
                      <span className="w-6 shrink-0 text-sm font-bold text-primary">{part.n}</span>
                      <select
                        id={`part-${part.n}`}
                        aria-label={`Answer for part ${part.n}`}
                        disabled={part.example}
                        value={value || ""}
                        onChange={(event) =>
                          setAnswers((current) => ({ ...current, [String(part.n)]: event.target.value }))
                        }
                        className={`min-h-10 w-full max-w-full rounded-md border bg-background px-3 text-sm disabled:opacity-60 ${
                          correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"
                        }`}
                      >
                        <option value="">Choose…</option>
                        {WORDS.map((item) => (
                          <option key={item.letter} value={item.word}>
                            {OPTION_LABEL(item.letter, item.word)}
                          </option>
                        ))}
                      </select>
                      {part.example ? (
                        <span className="shrink-0 text-xs text-muted-foreground">example</span>
                      ) : checked ? (
                        correct ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                        )
                      ) : (
                        <span className="w-5 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={() => {
              setChecked(true);
              track({
                activityTitle: "BB Module 5 — Getting Started",
                activityType: "vocabulary",
                score,
                total: SCORED.length,
              });
            }}
          >
            Check answers
          </Button>
          {checked && (
            <span className="text-sm text-muted-foreground">
              {score} / {SCORED.length} correct
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GettingStartedEquipmentParts;
