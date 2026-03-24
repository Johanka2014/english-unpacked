import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PenLine, BookOpen, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import distributorsImage from "@/assets/bb-upper/distributors-adverts.png";

const STORAGE_KEY = "bb-upper-unit11-writing-distributor-proposal";

const WritingProposalUnit11 = () => {
  const [proposalText, setProposalText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setProposalText(saved);
  }, []);

  const saveProposal = () => {
    localStorage.setItem(STORAGE_KEY, proposalText);
    toast.success("Your proposal has been saved!");
  };

  const clearProposal = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProposalText("");
    toast.info("Your proposal has been cleared.");
  };

  return (
    <div className="space-y-8">
      {/* Task instructions */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PenLine className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Writing Task
            </h3>
          </div>

          <div className="bg-primary/10 rounded-lg p-5 border border-primary/20">
            <p className="text-foreground leading-relaxed">
              Your company, which produces electrical components, wants to break into a new market
              in another country, and is looking for a distributor in that country. The managing
              director has asked you to write a proposal, saying which distributor you recommend.
              Using the adverts for two potential distributors below and all your handwritten notes,
              write your proposal. Use the proposal from the reading section as a model.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Distributor adverts */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Distributor Information
            </h3>
          </div>

          <img
            src={distributorsImage}
            alt="Adverts for Burford Electrical Distributions and Choice Electrics with handwritten notes"
            className="w-full rounded-lg shadow-md"
          />

          {/* Key info summary */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
              <h4 className="font-bold text-foreground mb-2">Burford Electrical Distributions</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Established 1959</li>
                <li>Most major brands</li>
                <li>Large experienced sales force</li>
                <li>Offices all over the country</li>
                <li>Daily deliveries</li>
              </ul>
              <p className="text-xs italic text-muted-foreground mt-3 border-t border-teal-200 dark:border-teal-700 pt-2">
                <strong>Notes:</strong> Stock our competitors' products — won't be so interested in selling ours. Highly paid — will make our products expensive. You pay extra for these.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h4 className="font-bold text-foreground mb-2">Choice Electrics</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Established 2003</li>
                <li>Electrical and electronic components</li>
                <li>Young, keen sales force</li>
                <li>Delivery by express courier</li>
              </ul>
              <p className="text-xs italic text-muted-foreground mt-3 border-t border-slate-200 dark:border-slate-700 pt-2">
                <strong>Notes:</strong> Reputation for high-quality, state-of-the-art components — like ours! Internet sales + same day delivery — free!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model proposal accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="model" className="border rounded-lg">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              📄 View Model Proposal (from Reading section)
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-4">
                Proposal for location of new facilities in Scotland
              </h4>

              <div className="mb-4">
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Introduction</h5>
                <p className="text-foreground text-sm leading-relaxed">
                  The purpose of this proposal is to compare Edinburgh and Glasgow as possible locations for BioBok's new R&D facility in Scotland and to recommend which city we should choose.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Workforce</h5>
                <p className="text-foreground text-sm leading-relaxed">
                  Although Glasgow has the largest number of students in Scotland, I suggest that we should recruit people who are already employed in the sector, and many of the best scientists are in the Edinburgh region.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Premises</h5>
                <p className="text-foreground text-sm leading-relaxed">
                  Property prices appear to be lower in Glasgow. However, it would be a good idea to try to find suitable premises in the Edinburgh area, because it contains a 'Science Triangle' with purpose-built laboratories. Also, the Science Triangle encourages the co-operation and knowledge-sharing we need.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Lifestyle</h5>
                <p className="text-foreground text-sm leading-relaxed">
                  Glasgow has a dynamic and exciting lifestyle with many cultural events. On the other hand, Edinburgh is one of the cities with the highest quality of life in the UK. This will help us to attract staff to live and work there.
                </p>
              </div>

              <div>
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">Recommended Course of Action</h5>
                <p className="text-foreground text-sm leading-relaxed">
                  I strongly recommend that we choose Edinburgh for the reasons given above. Our next steps should be to contact:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground text-sm">
                  <li>Scottish Enterprise in order to find a suitable building</li>
                  <li>a recruitment agency to find the staff we require.</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Writing area */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PenLine className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Write Your Proposal
            </h3>
          </div>

          <p className="text-muted-foreground mb-4 text-sm">
            Write a proposal recommending one of the two distributors. Use the model proposal structure (Introduction, key sections, Recommended Course of Action) and include recommendation language from the Writing: Making Recommendations section.
          </p>

          <Textarea
            value={proposalText}
            onChange={(e) => setProposalText(e.target.value)}
            placeholder="Proposal for choice of distributor&#10;&#10;Introduction&#10;The purpose of this proposal is to...&#10;&#10;..."
            className="min-h-[350px] font-mono text-sm"
          />

          <div className="flex gap-3 mt-4">
            <Button onClick={saveProposal} className="bg-primary hover:bg-primary/90 gap-2">
              <Save className="h-4 w-4" /> Save Proposal
            </Button>
            <Button variant="outline" onClick={clearProposal} className="gap-2 text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" /> Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingProposalUnit11;
