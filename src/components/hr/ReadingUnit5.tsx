import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const remunerationPackageItems = [
  { id: "a", label: "performance-related pay" },
  { id: "b", label: "sports club membership" },
  { id: "c", label: "employee assistance programme" },
  { id: "d", label: "flexible working hours" },
  { id: "e", label: "relocation expenses" },
  { id: "f", label: "pension scheme" },
  { id: "g", label: "profit-sharing bonus scheme" },
  { id: "h", label: "life insurance" },
  { id: "i", label: "cafeteria" },
  { id: "j", label: "crèche / childcare facilities" },
  { id: "k", label: "shares in success" },
  { id: "l", label: "salaries" },
];

const jobAdverts = [
  {
    title: "Vehicle Inspectors",
    description: "Use your own car to look at the vehicles of prospective insurance customers and complete a simple checklist. Pay according to how many inspections you carry out. Ideal candidate must have own car, hold a full driving licence.",
    salary: "£8.00 per inspection",
  },
  {
    title: "Bus Drivers",
    description: "Full-time vacancies available for PCV licence holders. You will benefit from 4 weeks' paid holiday, pension scheme, and free travel on bus and underground services.",
    salary: "£18,000 pa approx.",
  },
  {
    title: "Customer Service Assistants",
    description: "We are currently seeking people with previous customer service experience, who can work flexible shifts. The job involves dealing with our customers at the airport, giving advice, recommending products, and offering travel tips.",
    salary: "£8.00 ph Mon-Sat / £10.00 ph Sundays & bank holidays",
  },
  {
    title: "Electricians",
    description: "Productivity bonus, 40 hours per week, vehicle supplied. Applications are invited from experienced and qualified electricians to join our busy team.",
    salary: "Competitive + bonus",
  },
  {
    title: "Head of Personnel Services",
    description: "Seeks an experienced HR professional to lead an HR team across the country. Excellent staff performance record essential.",
    salary: "£45,724-£48,750 pa + relocation package",
  },
  {
    title: "UK Sales Manager",
    description: "Required to lead the UK sales force. At least five years' successful experience in a similar post in the food and beverage sector is a must. Excellent communication skills, a flair for business, and a competitive spirit are essential.",
    salary: "£50,000 + car + extensive benefits",
  },
];

const articleQuestions = [
  { id: 1, question: "Why are companies wasting billions on benefits?", showAnswer: "Because many employees don't appreciate their benefits or know their value in monetary terms." },
  { id: 2, question: "What is the move towards?", showAnswer: "More flexible benefits where employees can choose what they prefer." },
  { id: 3, question: "What did one company do to address this?", showAnswer: "They introduced a new benefits package in stages, issued employee benefits statements, and ran focus groups." },
  { id: 4, question: "Is consulting employees on benefits 'too democratic'?", showAnswer: "The article suggests it's beneficial — as long as budgets are not exceeded, consulting employees can lead to a more contented and motivated workforce." },
];

const ReadingUnit5 = () => {
  const [showPackageAnswers, setShowPackageAnswers] = useState(false);
  const [showArticleAnswers, setShowArticleAnswers] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-8">
      {/* Remuneration Packages */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Remuneration Packages</h3>
          <p className="text-muted-foreground mb-4">
            Two companies have posted their remuneration packages on their job pages. Match these benefits to the descriptions:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {remunerationPackageItems.map((item) => (
              <span key={item.id} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {item.id}. {item.label}
              </span>
            ))}
          </div>

          <div className="p-4 bg-muted/30 rounded-lg mb-4">
            <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
            <p className="text-muted-foreground text-sm">
              Another term for pay or salary is <strong>remuneration</strong> or <strong>compensation</strong>. A remuneration package is the total of all financial and non-financial benefits an employee receives (i.e. the salary plus a car, a pension scheme and life assurance).
            </p>
          </div>

          <Button onClick={() => setShowPackageAnswers(!showPackageAnswers)} variant="outline">
            {showPackageAnswers ? "Hide" : "Show"} Package Comparison
          </Button>
          {showPackageAnswers && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
              <p><strong>Key terms:</strong> "Payment reviewed on a merit basis" = performance-related pay. "Comprehensive moving expenses" = relocation expenses. "Shares in success" = profit-sharing or employee share schemes.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Job Adverts */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Job Advertisements</h3>
          <p className="text-muted-foreground mb-4">Read these job adverts. How do the salaries and benefits compare to those in your country?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobAdverts.map((ad) => (
              <div key={ad.title} className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">{ad.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{ad.description}</p>
                <p className="text-primary font-medium text-sm">💰 {ad.salary}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
            <p className="text-muted-foreground text-sm">
              <strong>Wage</strong> was traditionally used for the money paid regularly to a worker (usually in cash on a weekly basis) and <strong>salary</strong> for monthly pay. However, wage is still used as an alternative to salary when talking about pay in general, e.g. wage differentials, wage freeze, minimum wage.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Benefits Article */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Dissatisfaction Over Benefits Packages</h3>
          <div className="prose prose-sm max-w-none text-muted-foreground mb-6 space-y-3">
            <p>Companies are wasting billions providing non-salary benefits, the value of which is not understood by employees. New research has revealed that many employees don't appreciate their benefits or know their value in monetary terms, despite the fact that 90% of employers believe such benefits are essential to both attract and keep staff.</p>
            <p>At a time of strong competition in the recruitment market, it's essential that money is spent on relevant benefits and that they are appreciated by the staff. There is a move towards more flexible benefits, a report stated. A number of initiatives are currently being piloted by companies.</p>
            <p>One such company recently decided to introduce a new benefits package in stages and then issued all staff with an employee benefits statement, so they could see exactly what they were getting. Now they are running focus groups on the scheme, before introducing fully flexible benefits.</p>
            <p>Is this being too democratic? As long as budgets are not exceeded, what could be better than to consult with employees on what benefits they prefer? You could have a more contented and motivated workforce at the end of the day.</p>
          </div>

          <h4 className="font-semibold text-foreground mb-3">Comprehension Questions</h4>
          <div className="space-y-3">
            {articleQuestions.map((q) => (
              <div key={q.id} className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-muted-foreground">{q.id}. {q.question}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowArticleAnswers({ ...showArticleAnswers, [q.id]: !showArticleAnswers[q.id] })}
                  >
                    {showArticleAnswers[q.id] ? "Hide" : "Show"}
                  </Button>
                </div>
                {showArticleAnswers[q.id] && (
                  <p className="text-green-700 text-sm mt-2 italic">{q.showAnswer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground italic">💬 <strong>Over to You:</strong> What benefits would your new employees prefer to have? Discuss.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit5;
