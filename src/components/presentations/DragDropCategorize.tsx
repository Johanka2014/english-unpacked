import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Phrase {
  id: string;
  text: string;
  category: string;
}

interface Category {
  id: string;
  title: string;
}

interface DragDropCategorizeProps {
  phrases: Phrase[];
  categories: Category[];
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

const DragDropCategorize = ({ phrases, categories, title, description, imageUrl, imageAlt }: DragDropCategorizeProps) => {
  const [bank, setBank] = useState(() => [...phrases].sort(() => Math.random() - 0.5));
  const [categoryItems, setCategoryItems] = useState<Record<string, Phrase[]>>(() => {
    const init: Record<string, Phrase[]> = {};
    categories.forEach((c) => (init[c.id] = []));
    return init;
  });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = useCallback((id: string) => setDraggedId(id), []);

  const handleDropOnCategory = useCallback(
    (catId: string) => {
      if (!draggedId) return;
      const phrase = bank.find((p) => p.id === draggedId) ||
        Object.values(categoryItems).flat().find((p) => p.id === draggedId);
      if (!phrase) return;

      setBank((prev) => prev.filter((p) => p.id !== draggedId));
      setCategoryItems((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          updated[key] = updated[key].filter((p) => p.id !== draggedId);
        });
        updated[catId] = [...updated[catId], phrase];
        return updated;
      });
      setDraggedId(null);
    },
    [draggedId, bank, categoryItems]
  );

  const handleDropOnBank = useCallback(() => {
    if (!draggedId) return;
    const phrase = Object.values(categoryItems).flat().find((p) => p.id === draggedId);
    if (!phrase) return;
    setCategoryItems((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        updated[key] = updated[key].filter((p) => p.id !== draggedId);
      });
      return updated;
    });
    setBank((prev) => [...prev, phrase]);
    setDraggedId(null);
  }, [draggedId, categoryItems]);

  const checkAnswers = () => {
    let allCorrect = true;
    Object.entries(categoryItems).forEach(([catId, items]) => {
      items.forEach((item) => {
        if (item.category !== catId) allCorrect = false;
      });
    });
    if (bank.length > 0) allCorrect = false;
    setFeedback(allCorrect ? "Perfect! All phrases are correctly categorized." : "Not quite right. Check the highlighted phrases.");
    setFeedbackType(allCorrect ? "correct" : "incorrect");
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-col md:flex-row gap-8">
          {imageUrl && (
            <div className="w-full md:w-1/3">
              <img src={imageUrl} alt={imageAlt || ""} className="rounded-lg shadow-md w-full" loading="lazy" />
            </div>
          )}
          <div
            className="w-full md:w-1/3 p-4 rounded-lg bg-blue-50 min-h-[100px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropOnBank}
          >
            <h4 className="font-semibold mb-2 text-center text-foreground">Phrase Bank</h4>
            <div className="space-y-2">
              {bank.map((p) => (
                <div
                  key={p.id}
                  draggable
                  onDragStart={() => handleDragStart(p.id)}
                  className="p-2 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing"
                >
                  {p.text}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDropOnCategory(cat.id)}
                className="border-2 border-dashed border-brand-royal/30 rounded-lg p-3 min-h-[60px] bg-white/50"
              >
                <h4 className="font-semibold text-sm mb-2 text-brand-navy">{cat.title}</h4>
                {categoryItems[cat.id]?.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item.id)}
                    className={`p-2 rounded-md shadow-sm mb-1 cursor-grab text-sm ${
                      feedbackType && item.category === cat.id
                        ? "bg-green-50 border border-green-500"
                        : feedbackType && item.category !== cat.id
                        ? "bg-red-50 border border-red-500"
                        : "bg-white border border-border"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Order
        </Button>
        {feedback && (
          <p className={`mt-2 text-sm font-medium ${feedbackType === "correct" ? "text-green-600" : "text-red-600"}`}>
            {feedback}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default DragDropCategorize;
