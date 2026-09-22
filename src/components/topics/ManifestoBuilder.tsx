import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const STORAGE_KEY = 'politics-manifesto-builder';

const fields = [
  { id: 'party', label: 'Party name', placeholder: 'The Forward Together Party', short: true },
  { id: 'slogan', label: 'Campaign slogan', placeholder: 'A fair voice for every community', short: true },
  { id: 'tax', label: 'Tax', placeholder: 'If we were elected, we would…' },
  { id: 'spending', label: 'Public spending', placeholder: 'We would spend more on… because…' },
  { id: 'education', label: 'Education', placeholder: 'If we formed the next government, schools would…' },
  { id: 'health', label: 'Health', placeholder: 'Our main health policy would be…' },
  { id: 'jobs', label: 'Jobs and the economy', placeholder: 'Unemployment would fall if…' },
  { id: 'law', label: 'Law and public safety', placeholder: 'If we changed the law, we would…' },
  { id: 'other', label: 'One more priority', placeholder: 'Choose housing, climate, transport, technology or another issue…' },
] as const;

type Values = Record<(typeof fields)[number]['id'], string>;

const blankValues = () => Object.fromEntries(fields.map((field) => [field.id, ''])) as Values;

const ManifestoBuilder = () => {
  const [values, setValues] = useState<Values>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...blankValues(), ...(JSON.parse(saved) as Partial<Values>) } : blankValues();
    } catch {
      return blankValues();
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(values)), 400);
    return () => clearTimeout(timer);
  }, [values]);

  const update = (id: keyof Values, value: string) => setValues((current) => ({ ...current, [id]: value }));

  return (
    <Card className="service-card p-0">
      <CardContent className="p-4 sm:p-6 space-y-5">
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
            6c · Build an election manifesto
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Create a fictional, democratic party. Use at least four second conditional sentences and make each promise specific enough to question.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.id} className={field.short ? 'space-y-1.5' : 'space-y-1.5 sm:col-span-2'}>
              <span className="text-sm font-semibold text-foreground">{field.label}</span>
              {field.short ? (
                <Input
                  value={values[field.id]}
                  onChange={(event) => update(field.id, event.target.value)}
                  placeholder={field.placeholder}
                />
              ) : (
                <Textarea
                  rows={3}
                  value={values[field.id]}
                  onChange={(event) => update(field.id, event.target.value)}
                  placeholder={field.placeholder}
                />
              )}
            </label>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">Saved automatically on this device</span>
          <Button variant="outline" size="sm" className="ml-auto gap-2" onClick={() => setValues(blankValues())}>
            <RotateCcw className="h-4 w-4" /> Clear manifesto
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManifestoBuilder;