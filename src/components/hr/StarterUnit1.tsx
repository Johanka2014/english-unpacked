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
          { id: '1', text: 'Analyse the job and consider internal staff versus the labour market' },
          { id: '2', text: 'Check or write the job description' },
          { id: '3', text: 'Prepare a person specification' },
          { id: '4', text: 'Advertise the job' },
          { id: '5', text: 'Carry out screening and interviews' },
          { id: '6', text: 'Shortlist applicants from the first interviews' },
          { id: '7', text: 'Conduct second interviews' },
          { id: '8', text: 'Select the most suitable candidate' },
          { id: '9', text: 'Make a job offer' },
          { id: '10', text: 'Send feedback to unsuccessful applicants' },
        ]}
        correctOrder={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
      />

      {/* Activity 2: Job Description vs Person Specification */}
      <DragDropCategorize
        title="Activity 2: Job Description vs Person Specification"
        description="Drag each item into the correct category. Which items belong in a job description and which in a person specification?"
        categories={['Job Description', 'Person Specification']}
        items={[
          { id: 'jd1', text: 'Location of workplace', category: 'Job Description' },
          { id: 'jd2', text: 'Main purpose of job', category: 'Job Description' },
          { id: 'jd3', text: 'Job title', category: 'Job Description' },
          { id: 'jd4', text: 'Key duties/responsibilities', category: 'Job Description' },
          { id: 'jd5', text: 'Reporting relationship (who person is responsible to and for)', category: 'Job Description' },
          { id: 'ps1', text: 'Skills and qualities needed for job', category: 'Person Specification' },
          { id: 'ps2', text: 'Previous experience', category: 'Person Specification' },
          { id: 'ps3', text: 'Desirable skills', category: 'Person Specification' },
          { id: 'ps4', text: 'Qualifications/training', category: 'Person Specification' },
          { id: 'ps5', text: 'Personal style/behaviour', category: 'Person Specification' },
        ]}
      />
    </div>
  );
};

export default StarterUnit1;
