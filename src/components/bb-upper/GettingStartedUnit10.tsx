import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw, MessageCircle } from "lucide-react";

interface Person {
  id: string;
  name: string;
  details: string;
}

interface Statement {
  id: number;
  text: string;
  correctPersonId: string;
}

const people: Person[] = [
  { id: "a", name: "Nesreen Abd al Aziz", details: "21, student of fashion design" },
  { id: "b", name: "Willi Bosch", details: "33, computer programmer" },
  { id: "c", name: "Francesca Santinelli", details: "24, assistant marketing manager" },
  { id: "d", name: "Marcel Lefebre", details: "48, bank manager" },
  { id: "e", name: "Peter Harrison", details: "42, secondary school teacher" },
];

const statements: Statement[] = [
  {
    id: 1,
    text: "If I had the money, I'd buy into a franchise — probably a clothing retail outlet.",
    correctPersonId: "a",
  },
  {
    id: 2,
    text: "If I lost my job, I'd start a business doing something completely unconnected with the classroom. I think I'd set up a small hotel in the country.",
    correctPersonId: "e",
  },
  {
    id: 3,
    text: "If I started my own company, it would have something to do with producing specialist software for educational purposes.",
    correctPersonId: "b",
  },
  {
    id: 4,
    text: "If I was given early retirement, I wouldn't just retire. I'd start up a specialist travel company with my son. I think my knowledge of finance would come in useful there.",
    correctPersonId: "d",
  },
  {
    id: 5,
    text: "Although I'm still quite young, I think I know quite a lot about my field. If I set up in business, it would be a consultancy to help other people publicise and sell their products.",
    correctPersonId: "c",
  },
];

const discussionQuestions = [
  "If you started your own business, what would it be?",
  "What problems would you expect to have if you started your own business?",
];

const usefulLanguage = [
  "If I started my own business, it would be ...",
  "If I set up in business, I would ...",
  "I would expect to ...",
];

const GettingStartedUnit10 = () => {
  const [matches, setMatches] = useState<Record<number, string>>({});
  const [draggedPerson, setDraggedPerson] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  const shuffledPeople = useMemo(
    () => [...people].sort(() => Math.random() - 0.5),
    []
  );

  const usedPeople = Object.values(matches);

  const handleDragStart = (personId: string) => {
    setDraggedPerson(personId);
  };

  const handleDrop = (statementId: number) => {
    if (draggedPerson) {
      setMatches((prev) => {
        const updated = { ...prev };
        // Remove person from any previous match
        for (const key in updated) {
          if (updated[Number(key)] === draggedPerson) {
            delete updated[Number(key)];
          }
        }
        updated[statementId] = draggedPerson;
        return updated;
      });
      setDraggedPerson(null);
      setDragOverId(null);
    }
  };

  const handleTap = (personId: string) => {
    setSelectedPerson((prev) => (prev === personId ? null : personId));
  };

  const handleStatementTap = (statementId: number) => {
    if (selectedPerson) {
      setMatches((prev) => {
        const updated = { ...prev };
        for (const key in updated) {
          if (updated[Number(key)] === selectedPerson) {
            delete updated[Number(key)];
          }
        }
        updated[statementId] = selectedPerson;
        return updated;
      });
      setSelectedPerson(null);
    }
  };

  const removeMatch = (statementId: number) => {
    if (checked) return;
    setMatches((prev) => {
      const updated = { ...prev };
      delete updated[statementId];
      return updated;
    });
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setMatches({});
    setChecked(false);
    setSelectedPerson(null);
    setDraggedPerson(null);
  };

  const getPersonById = (id: string) => people.find((p) => p.id === id);

  const correctCount = checked
    ? statements.filter((s) => matches[s.id] === s.correctPersonId).length
    : 0;

  return (
    <div className="space-y-8">
      {/* Exercise 1: Matching */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Exercise 1: Match the statements</CardTitle>
          <p className="text-muted-foreground text-sm">
            Match each statement (1–5) with the correct person (a–e). Drag a person onto the statement, or tap to select then tap a statement.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* People bank */}
          <div className="flex flex-wrap gap-2">
            {shuffledPeople.map((person) => {
              const isUsed = usedPeople.includes(person.id);
              const isSelected = selectedPerson === person.id;
              return (
                <div
                  key={person.id}
                  draggable={!isUsed && !checked}
                  onDragStart={() => handleDragStart(person.id)}
                  onClick={() => !isUsed && !checked && handleTap(person.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium cursor-grab select-none transition-all border
                    ${isUsed ? "opacity-40 cursor-default bg-muted text-muted-foreground" : ""}
                    ${isSelected ? "ring-2 ring-primary bg-primary/10 border-primary" : "border-border bg-card hover:bg-accent"}
                    ${checked ? "cursor-default" : ""}
                  `}
                >
                  <span className="font-bold mr-1">{person.id})</span>
                  {person.name}, <span className="text-muted-foreground">{person.details}</span>
                </div>
              );
            })}
          </div>

          {/* Statements */}
          <div className="space-y-3">
            {statements.map((stmt) => {
              const matchedPersonId = matches[stmt.id];
              const matchedPerson = matchedPersonId ? getPersonById(matchedPersonId) : null;
              const isCorrect = checked && matchedPersonId === stmt.correctPersonId;
              const isWrong = checked && matchedPersonId && matchedPersonId !== stmt.correctPersonId;
              const isDragOver = dragOverId === stmt.id;

              return (
                <div
                  key={stmt.id}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOverId(stmt.id);
                  }}
                  onDragLeave={() => setDragOverId(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDrop(stmt.id);
                  }}
                  onClick={() => handleStatementTap(stmt.id)}
                  className={`rounded-lg border p-4 transition-all ${
                    isDragOver ? "border-primary bg-primary/5" : "border-border"
                  } ${isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}
                    ${isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}
                    ${!checked && !matchedPerson ? "cursor-pointer" : ""}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-muted-foreground mt-0.5 shrink-0">{stmt.id}.</span>
                    <p className="text-sm flex-1">{stmt.text}</p>
                  </div>

                  {matchedPerson && (
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm font-medium ${
                          isCorrect
                            ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                            : isWrong
                            ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isCorrect && <CheckCircle className="h-3.5 w-3.5" />}
                        {isWrong && <XCircle className="h-3.5 w-3.5" />}
                        {matchedPerson.id}) {matchedPerson.name}
                      </span>
                      {!checked && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeMatch(stmt.id);
                          }}
                          className="text-muted-foreground hover:text-foreground text-xs"
                        >
                          ✕
                        </button>
                      )}
                      {isWrong && (
                        <span className="text-xs text-green-600 dark:text-green-400">
                          → {getPersonById(stmt.correctPersonId)?.name}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleCheck}
              disabled={Object.keys(matches).length < statements.length || checked}
            >
              Check Answers
            </Button>
            <Button variant="outline" onClick={handleReset} className="gap-1">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
            {checked && (
              <span className="text-sm font-medium">
                {correctCount}/{statements.length} correct
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Discussion Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Discussion
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Discuss these questions with your partner.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-3 text-sm">
            {discussionQuestions.map((q, i) => (
              <li key={i} className="leading-relaxed">{q}</li>
            ))}
          </ol>

          <div className="mt-4 bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="text-sm font-semibold text-primary mb-2">Useful language</p>
            <ul className="space-y-1 text-sm text-muted-foreground italic">
              {usefulLanguage.map((phrase, i) => (
                <li key={i}>• {phrase}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              → See <span className="font-medium">Grammar Workshop 3, page 62</span> for the second conditional.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit10;
