import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, MessageSquare, Users } from "lucide-react";
import kitkatImg from "@/assets/kitkat-bar.jpg";
import poloImg from "@/assets/polo-mints.jpg";

const SpeakingCompanyHistoryExercise = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">
              Speaking: Asking about Products
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Work in pairs. One of you should look at the <strong>Student A</strong> card and the other at the <strong>Student B</strong> card. Ask your partner questions in the <strong>past simple</strong>, using the question words in brackets, to complete the missing information.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-sm text-muted-foreground italic">
              💡 <strong>Tip:</strong> Use past simple question forms: "When did they…?", "Where did it…?", "How long did it…?", "Why did they…?"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Product images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="service-card overflow-hidden">
          <img src={kitkatImg} alt="Kit Kat chocolate bar" loading="lazy" width={640} height={512} className="w-4/5 mx-auto pt-4" />
          <CardContent className="p-4 text-center">
            <h4 className="text-lg font-bold text-red-600 font-merriweather">Have a break! Have a Kit Kat!</h4>
          </CardContent>
        </Card>
        <Card className="service-card overflow-hidden">
          <img src={poloImg} alt="Polo mints" loading="lazy" width={640} height={512} className="w-4/5 mx-auto pt-4" />
          <CardContent className="p-4 text-center">
            <h4 className="text-lg font-bold text-green-700 font-merriweather">Polo: the mint with the hole!</h4>
          </CardContent>
        </Card>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student A */}
        <Collapsible>
          <Card className="border-primary/30">
            <CollapsibleTrigger className="w-full">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Student A</span>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="px-4 pb-6 pt-0 space-y-6">
                {/* Kit Kat - with gaps */}
                <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-5 border border-red-200 dark:border-red-800">
                  <h5 className="text-lg font-bold text-red-600 mb-3">🍫 Have a break! Have a Kit Kat!</h5>
                  <div className="space-y-3 text-foreground text-sm leading-relaxed">
                    <p>
                      Rowntree's first launched the Kit Kat bar in <span className="font-bold text-primary">............</span> <em>(When?)</em>. At that time it was called <em>Rowntree's Chocolate Crisp</em>.
                    </p>
                    <p>
                      They changed the name to Kit Kat in <span className="font-bold text-primary">............</span> <em>(When?)</em>. The name probably came from <span className="font-bold text-primary">............</span> <em>(Where?)</em>. It took <span className="font-bold text-primary">............</span> <em>(How long?)</em> before it became Rowntree's leading product.
                    </p>
                    <p>
                      Their first advertising slogan for the product was <em>What active people need</em>. They adopted the slogan, <em>Have a break. Have a Kit Kat</em> in <span className="font-bold text-primary">............</span> <em>(When?)</em>.
                    </p>
                    <p>
                      Kit Kat wrappers have always been red and white except in 1945 when they changed the wrapper to a blue one. This was because <span className="font-bold text-primary">............</span> <em>(Why?)</em>
                    </p>
                  </div>
                </div>

                {/* Polo - full text (answers for Student B) */}
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                  <h5 className="text-lg font-bold text-green-700 mb-3">🟢 Polo: the mint with the hole!</h5>
                  <div className="space-y-3 text-foreground text-sm leading-relaxed">
                    <p>
                      The original ring-shaped mints were called <em>Lifesavers</em> and came onto the market in the USA in <strong>1912</strong>. They were not a success at first because they lost their flavour after about <strong>a month</strong>. However, <strong>Noble and Allen</strong>, two advertising men, managed to solve this problem by changing the type of packaging. After this, <em>Lifesavers</em> mints became very popular.
                    </p>
                    <p>
                      The product first appeared in the UK in <strong>1919</strong>. At first they were successful but their popularity declined during the 1930s.
                    </p>
                    <p>
                      Then, in <strong>1948</strong>, Rowntree's introduced Polo mints to the UK market. They used the advertising slogan <em>The mint with the hole</em>, which became one of the best known slogans in the country.
                    </p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Student B */}
        <Collapsible>
          <Card className="border-primary/30">
            <CollapsibleTrigger className="w-full">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Student B</span>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="px-4 pb-6 pt-0 space-y-6">
                {/* Kit Kat - full text (answers for Student A) */}
                <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-5 border border-red-200 dark:border-red-800">
                  <h5 className="text-lg font-bold text-red-600 mb-3">🍫 Have a break! Have a Kit Kat!</h5>
                  <div className="space-y-3 text-foreground text-sm leading-relaxed">
                    <p>
                      Rowntree's first launched the Kit Kat bar in <strong>1935</strong>. At that time it was called <em>Rowntree's Chocolate Crisp</em>.
                    </p>
                    <p>
                      They changed the name to Kit Kat in <strong>1937</strong>. The name probably came from <strong>a famous book club in eighteenth century England</strong>. It took <strong>just two years</strong> before it became Rowntree's leading product.
                    </p>
                    <p>
                      Their first advertising slogan for the product was <em>What active people need</em>. They adopted the slogan, <em>Have a break. Have a Kit Kat</em> in <strong>1957</strong>.
                    </p>
                    <p>
                      Kit Kat wrappers have always been red and white except in 1945 when they changed the wrapper to a blue one. This was because <strong>they made Kit Kats with plain (dark) chocolate in that year because of a milk shortage</strong>.
                    </p>
                  </div>
                </div>

                {/* Polo - with gaps */}
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                  <h5 className="text-lg font-bold text-green-700 mb-3">🟢 Polo: the mint with the hole!</h5>
                  <div className="space-y-3 text-foreground text-sm leading-relaxed">
                    <p>
                      The original ring-shaped mints were called <em>Lifesavers</em> and came onto the market in the USA in <span className="font-bold text-primary">............</span> <em>(When?)</em>. They were not a success at first because they lost their flavour after about <span className="font-bold text-primary">............</span> <em>(How long?)</em>. However, <span className="font-bold text-primary">............</span> <em>(Who?)</em>, two advertising men, managed to solve this problem by changing the type of packaging. After this, <em>Lifesavers</em> mints became very popular.
                    </p>
                    <p>
                      The product first appeared in the UK in <span className="font-bold text-primary">............</span> <em>(When?)</em>. At first they were successful but their popularity declined during the 1930s.
                    </p>
                    <p>
                      Then, in <span className="font-bold text-primary">............</span> <em>(When?)</em>, Rowntree's introduced Polo mints to the UK market. They used the advertising slogan <em>The mint with the hole</em>, which became one of the best known slogans in the country.
                    </p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>

      {/* Speaking tip */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-sm font-medium text-foreground mb-1">💬 Talking Point</p>
            <p className="text-sm text-muted-foreground">
              After completing the information gap activity, discuss with your partner: Which product has a more interesting history — Kit Kat or Polo? Why?
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingCompanyHistoryExercise;
