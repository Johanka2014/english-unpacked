import MatchingExercise from '@/components/presentations/MatchingExercise';
import DragDropCategorize from '@/components/presentations/DragDropCategorize';

const StarterUnit3 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 1: Complete words and match definitions */}
      <MatchingExercise
        title="Activity 1: Employee Relations Vocabulary"
        description="Match each employee relations term with its correct definition."
        pairs={[
          { id: '1', left: 'short-time working', right: 'reduced working hours, usually when a company has a decrease in production' },
          { id: '2', left: 'contract of employment', right: 'written details given to an employee to confirm terms and conditions' },
          { id: '3', left: 'equal pay', right: 'the same salary for men and women' },
          { id: '4', left: 'parental leave', right: 'the right for parents to take time off work to look after a child' },
          { id: '5', left: 'workplace injuries', right: 'accidents that happen at work' },
          { id: '6', left: 'sex discrimination', right: 'to treat someone of either sex unfairly' },
          { id: '7', left: 'disciplinary and grievance procedure', right: 'procedure when an employee breaks the rules and what the employee can do if unhappy with a decision' },
          { id: '8', left: 'work-related stress', right: 'stress caused by negative factors in the job' },
        ]}
      />

      {/* Activity 2: Match headlines to word partnerships */}
      <MatchingExercise
        title="Activity 2: Headlines & Employee Relations"
        description="Match each headline to the employee relations topic it relates to."
        pairs={[
          { id: '1', left: '6,000,000 hours lost in one year', right: 'short-time working' },
          { id: '2', left: "80% of males don't take daddy time off", right: 'parental leave' },
          { id: '3', left: 'Woman refused job on oil rig', right: 'sex discrimination' },
          { id: '4', left: 'Secretary falls over pen — company must pay', right: 'workplace injuries' },
          { id: '5', left: 'Waiters paid more than waitresses', right: 'equal pay' },
        ]}
      />
    </div>
  );
};

export default StarterUnit3;
