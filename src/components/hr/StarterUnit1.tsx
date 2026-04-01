import OrderingExercise from '@/components/presentations/OrderingExercise';
import DragDropCategorize from '@/components/presentations/DragDropCategorize';

const StarterUnit1 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 1: Recruitment process ordering */}
      <OrderingExercise
        title="Activity 1: The Recruitment Process"
        description="Put the steps in the recruitment process in the correct order."
        items={[
          { id: 1, text: 'Analyse the job and consider internal staff versus the labour market', order: 1 },
          { id: 2, text: 'Check or write the job description', order: 2 },
          { id: 3, text: 'Prepare a person specification', order: 3 },
          { id: 4, text: 'Advertise the job', order: 4 },
          { id: 5, text: 'Carry out screening and interviews', order: 5 },
          { id: 6, text: 'Shortlist applicants from the first interviews', order: 6 },
          { id: 7, text: 'Conduct second interviews', order: 7 },
          { id: 8, text: 'Select the most suitable candidate', order: 8 },
          { id: 9, text: 'Make a job offer', order: 9 },
          { id: 10, text: 'Send feedback to unsuccessful applicants', order: 10 },
        ]}
      />

      {/* Activity 2: Job Description vs Person Specification */}
      <DragDropCategorize
        title="Activity 2: Job Description vs Person Specification"
        description="Drag each item into the correct category. Which items belong in a job description and which in a person specification?"
        categories={[
          { id: 'jd', title: 'Job Description' },
          { id: 'ps', title: 'Person Specification' },
        ]}
        phrases={[
          { id: 'jd1', text: 'Location of workplace', category: 'jd' },
          { id: 'jd2', text: 'Main purpose of job', category: 'jd' },
          { id: 'jd3', text: 'Job title', category: 'jd' },
          { id: 'jd4', text: 'Key duties/responsibilities', category: 'jd' },
          { id: 'jd5', text: 'Reporting relationship (who person is responsible to and for)', category: 'jd' },
          { id: 'ps1', text: 'Skills and qualities needed for job', category: 'ps' },
          { id: 'ps2', text: 'Previous experience', category: 'ps' },
          { id: 'ps3', text: 'Desirable skills', category: 'ps' },
          { id: 'ps4', text: 'Qualifications/training', category: 'ps' },
          { id: 'ps5', text: 'Personal style/behaviour', category: 'ps' },
        ]}
      />
    </div>
  );
};

export default StarterUnit1;
