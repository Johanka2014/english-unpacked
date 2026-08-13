import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import type { NoteField } from '@/data/engineeringData';

interface Props {
  title: string;
  body?: string;
  fields: NoteField[];
  storageKey?: string;
}

const NotesBoxes = ({ title, body, fields, storageKey = 'notes' }: Props) => {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`ef-notes-${storageKey}`);
      if (raw) setValues(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const update = (id: string, value: string) => {
    const next = { ...values, [id]: value };
    setValues(next);
    try {
      localStorage.setItem(`ef-notes-${storageKey}`, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const headingId = `notes-heading-${storageKey}`;

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <section aria-labelledby={headingId}>
          <h3 id={headingId} className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          {body && <p className="text-muted-foreground mb-4 text-sm">{body}</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={`note-${storageKey}-${f.id}`} className="block text-sm font-medium text-foreground mb-1">
                  {f.label}
                </label>
                <Textarea
                  id={`note-${storageKey}-${f.id}`}
                  value={values[f.id] || ''}
                  placeholder={f.placeholder}
                  onChange={(e) => update(f.id, e.target.value)}
                  rows={3}
                  className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic" aria-live="polite">Your answers are saved in this browser.</p>
        </section>
      </CardContent>
    </Card>
  );
};

export default NotesBoxes;
