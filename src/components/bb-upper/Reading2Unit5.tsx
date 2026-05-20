import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";

const statements = [
  { id: 1, text: "When you buy a brand, you know the product will always be of the same quality each time.", answer: "A" },
  { id: 2, text: "Traditional methods of investigating consumers' tastes are often not effective.", answer: "D" },
  { id: 3, text: "The products we buy reflect the sort of people we want to be.", answer: "C" },
  { id: 4, text: "Sometimes the brand is invented before the product is developed.", answer: "C" },
  { id: 5, text: "People's loyalty to brands is decreasing.", answer: "B" },
  { id: 6, text: "People are willing to spend more on branded products.", answer: "A" },
  { id: 7, text: "Often the product itself is not as important as the feelings and ideas associated with it.", answer: "C" },
  { id: 8, text: "Nowadays, even strong brands have to deal with competition from other companies.", answer: "B" },
  { id: 9, text: "Some traditionally strong brands have found it difficult to remain attractive to consumers.", answer: "D" },
  { id: 10, text: "Brands save time and make shopping easier.", answer: "A" },
];

const extracts = [
  {
    letter: "A",
    text: "Historically, building a brand was rather simple. A logo was a straightforward guarantee of quality and consistency, or it was a signal that a product was something new. For that, consumers were, quite rationally, prepared to pay a premium. 'Brands were the first piece of consumer protection,' says Jeremy Bullmore, a long-time director of J. Walter Thompson, an advertising agency. 'You knew where to go if you had a complaint.' Brands also helped consumers to buy efficiently. As Unilever's chairman Niall FitzGerald points out: 'A brand is a storehouse of trust. That matters more and more as choices multiply. People want to simplify their lives.'",
  },
  {
    letter: "B",
    text: "As shoppers have become more mobile and discovered more places to buy, including online websites, they switch products more often. Brands now face competition from the most unexpected quarters, says Rita Clifton, chief executive of Interbrand: 'If you were a soap-powder company years ago, your competition would come from the same industry and probably the same country. Now it could be anyone. Who'd have thought that Virgin would sell mobile phones, Versace run hotels or Tesco sell banking services?'",
  },
  {
    letter: "C",
    text: "The new marketing approach is to build a brand not a product — to sell a lifestyle or a personality, to appeal to emotions. But this requires a far greater understanding of human psychology. It is a much harder task than describing the virtues of a product. Clever, simple ads are dreamt up long before the product is produced. As one company president says of his product, it is its sense of humour, rather than its taste, that is the reason for its success: 'Our product is a personality,' he claims. 'We like certain people, but some people are just more fun and interesting.'",
  },
  {
    letter: "D",
    text: "Old-fashioned market-research methods help explain such mistakes. Focus groups, for example, are poor at discovering the real reasons why people like brands. Firms such as Coca-Cola and McDonald's, complacent from past success, find it difficult to admit that their customers are changing to newer products. To stay attractive, even the most powerful brands sometimes have to reinvent themselves, refreshing their appeal for a new generation of consumers.",
  },
];

const vocab = [
  { id: 1, def: "a design which represents a company/product (extract A)", answer: ["logo"] },
  { id: 2, def: "spend extra (extract A)", answer: ["pay a premium"] },
  { id: 3, def: "increase (extract A)", answer: ["multiply"] },
  { id: 4, def: "change (extract B)", answer: ["switch"] },
  { id: 5, def: "method (extract C)", answer: ["approach"] },
  { id: 6, def: "job (extract C)", answer: ["task"] },
  { id: 7, def: "relaxed, satisfied and not worried about dangers (extract D)", answer: ["complacent"] },
  { id: 8, def: "change themselves radically (extract D)", answer: ["reinvent themselves", "reinvent"] },
  { id: 9, def: "attractiveness (extract D)", answer: ["appeal"] },
];

const Reading2Unit5 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);
  const [v, setV] = useState<Record<number, string>>({});
  const [vRes, setVRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    statements.forEach((s) => { r[s.id] = sel[s.id] === s.answer; });
    setRes(r);
  };
  const checkV = () => {
    const r: Record<number, boolean> = {};
    vocab.forEach((it) => {
      const val = (v[it.id] || "").trim().toLowerCase();
      r[it.id] = it.answer.map((a) => a.toLowerCase()).includes(val);
    });
    setVRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Reading: The Power of Brands</h3>
          <p className="text-muted-foreground">
            <strong>1</strong> Work with a partner and discuss whether you agree or disagree with each statement below.
          </p>
          <p className="text-muted-foreground">
            <strong>2</strong> Read the following extracts from an article about brands, then say which extract each statement corresponds to.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          {extracts.map((e) => (
            <div key={e.letter} className="space-y-1">
              <h4 className="font-bold text-brand-royal text-lg">Extract {e.letter}</h4>
              <p className="text-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-3">
        {statements.map((s) => (
          <Card key={s.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="font-bold text-brand-royal">{s.id}.</span>
                <p className="flex-1 text-foreground">{s.text}</p>
                {res && (res[s.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {s.answer}</span>)}
              </div>
              <div className="flex gap-2 ml-7">
                {extracts.map((e) => (
                  <button
                    key={e.letter}
                    onClick={() => { setSel((p) => ({ ...p, [s.id]: e.letter })); setRes(null); }}
                    className={`w-10 h-10 rounded-md border font-semibold transition-colors ${
                      sel[s.id] === e.letter ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                    }`}
                  >{e.letter}</button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Matching</Button>

      <Card className="service-card mt-8">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground">Find words or phrases in the extracts which mean the following.</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {vocab.map((it) => (
          <Card key={it.id} className="service-card">
            <CardContent className="p-4 flex items-center gap-3">
              <span className="font-bold text-brand-royal">{it.id}.</span>
              <p className="flex-1 text-foreground">{it.def}</p>
              <Input
                value={v[it.id] || ""}
                onChange={(e) => { setV((p) => ({ ...p, [it.id]: e.target.value })); setVRes(null); }}
                className={`w-52 ${vRes ? (vRes[it.id] ? "border-green-600" : "border-red-500") : ""}`}
              />
              {vRes && (vRes[it.id]
                ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                : <XCircle className="h-5 w-5 text-red-500" />)}
            </CardContent>
            {vRes && !vRes[it.id] && (
              <p className="text-sm text-red-600 px-4 pb-3">Answer: {it.answer[0]}</p>
            )}
          </Card>
        ))}
      </div>

      <Button onClick={checkV} className="bg-brand-royal hover:bg-brand-navy">Check Vocabulary</Button>
    </div>
  );
};

export default Reading2Unit5;
