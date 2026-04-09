import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import fordLogo from '@/assets/bb-ford-logo.png';
import cocaColaLogo from '@/assets/bb-cocacola-logo.png';
import nokiaLogo from '@/assets/bb-nokia-logo.png';
import appleLogo from '@/assets/bb-apple-logo.png';

const COMPANIES = [
  { id: 'a', name: 'Ford', logo: fordLogo, correctDate: '1903' },
  { id: 'b', name: 'Coca-Cola', logo: cocaColaLogo, correctDate: '1886' },
  { id: 'c', name: 'Nokia', logo: nokiaLogo, correctDate: '1865' },
  { id: 'd', name: 'Apple', logo: appleLogo, correctDate: '1976' },
];

const DATES = ['1865', '1886', '1903', '1976'];

const GettingStartedCompanyHistory = () => {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (companyId: string, date: string) => {
    if (checked) return;
    setSelections((prev) => ({ ...prev, [companyId]: date }));
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setSelections({});
    setChecked(false);
  };

  const allSelected = Object.keys(selections).length === COMPANIES.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Getting started</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          How old do you think these companies are? Try to match each one with the date it was set up.
        </p>

        {/* Company logos in a 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {COMPANIES.map((company) => {
            const isCorrect = checked && selections[company.id] === company.correctDate;
            const isWrong = checked && selections[company.id] && selections[company.id] !== company.correctDate;

            return (
              <div key={company.id} className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-medium text-muted-foreground mt-1">{company.id}</span>
                  <div className={`flex-1 rounded-lg border-2 p-4 flex items-center justify-center h-32 bg-background transition-colors ${
                    isCorrect ? 'border-green-500 bg-green-50' : isWrong ? 'border-destructive bg-red-50' : 'border-border'
                  }`}>
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-h-24 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Date selector */}
                <div className="flex gap-1.5 flex-wrap">
                  {DATES.map((date) => (
                    <button
                      key={date}
                      onClick={() => handleSelect(company.id, date)}
                      disabled={checked}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                        selections[company.id] === date
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-muted/50 text-foreground border-border hover:border-primary/50'
                      } ${checked ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {date}
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {checked && (
                  <div className="flex items-center gap-1.5 text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-medium">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-destructive" />
                        <span className="text-destructive font-medium">
                          {company.correctDate}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button onClick={handleCheck} disabled={!allSelected || checked}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
        </div>

        {/* Discussion question */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="discussion" className="border rounded-lg px-4">
            <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
              Discussion
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Compare your ideas with a partner and then check with your teacher. Would you prefer to work for a company with a long history or a new company?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default GettingStartedCompanyHistory;
