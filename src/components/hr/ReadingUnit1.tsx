import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReadingUnit1 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 13: Recruitment sources matching */}
      <MatchingExercise
        title="Activity 13: Sources of Recruitment"
        description="Match the definitions with the different sources of recruitment."
        pairs={[
          { id: 1, left: 'word of mouth', right: 'passing on information by networking or talking to people' },
          { id: 2, left: 'internal advertising', right: 'advertising vacancies inside a company' },
          { id: 3, left: 'media advertising', right: 'advertising jobs in the local or national press' },
          { id: 4, left: 'advertising in trade press', right: 'magazines for specific professions' },
          { id: 5, left: 'online recruitment', right: 'Internet recruitment sites for job seekers' },
          { id: 6, left: 'recruitment agencies', right: 'organizations that match jobs with people\'s experience' },
          { id: 7, left: 'unsolicited applications', right: 'letters received from people looking for a job (but not responding to an advertisement)' },
        ]}
      />

      {/* Reading passage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Reading: The Benefits of Using Recruitment Advertising Agencies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            Traditionally, recruitment advertising agencies are responsible for designing, writing, and placing job advertisements in the media. While this is still their main responsibility, they are now offering companies other services such as internal employee communication and the development of company literature, websites, and corporate identity (CI) in general. This change in focus reflects changes in the world of business. More and more companies now recognize the value of good employees and just how important it is to hold on to and attract skilled staff. Effective communication can help build bridges between the staff and the employer and provide both with an identity they can be proud of.
          </p>
          <p className="font-medium">Here are just some of the benefits of using recruitment advertising agencies:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Agencies have the expertise that companies do not always have in-house. This includes not only the ability to write and design ads but also the knowledge of and relationships with the press and media.</li>
            <li>Agencies can negotiate better prices and know which type of advert — whether in a newspaper, trade magazine, or online — can best reach the candidates you are looking for.</li>
            <li>Developing a new recruitment campaign or a new corporate identity requires a lot of time and money. Using an agency to handle this for you allows you to concentrate on running your company.</li>
            <li>By making one agency responsible for all your recruitment needs, you can make sure your company has a consistent message and thus attracts the right staff to fit your corporate culture and share your company's goals.</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Over to You</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Does your company use recruitment advertising agencies for designing and placing job advertisements? What are the advantages and disadvantages in your field of business?</li>
              <li>How does your company deal with corporate identity? Is the same agency — or department in your company — responsible for both functions?</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit1;
