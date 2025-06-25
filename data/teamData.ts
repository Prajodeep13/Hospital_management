import { TeamMember } from '../types';                                          

// CEO Team
const ceoTeam: TeamMember[] = [
  {
    id: 'ceo1',
    name: 'Dr. Ravi Ranjan',
    role: 'CEO – INDIA & SUBCONTINENT ANESTHESIOLOGY, CRITICAL CARE',
    image: '/images/ravi.png',
    category: 'ceo'
  },
  {
    id: 'ceo2',
    name: 'Mr. Patrick Omieno',
    role: 'CEO - AFRICA & GULF REGION CEO- Orion- Nexus, Africa and Middle',
    image: '/images/patricl.png',
    category: 'ceo'
  }
];

// Leadership Team
const leadershipTeam: TeamMember[] = Array.from({ length: 7 }, (_, i) => ({
  id: `leadership${i + 1}`,
  name: [
    'Dr. Deepak Natrajan',
    'Dr. Avinash Chandra Gupta',
    'Dr. Dinesh Ranjan',
    'Dr. Sunil Prakash',
    'Dr. Swarupa Mitra',
    'Dr. Geeta Gupta',
    'Dr. Sangeeta Sinha'
  ][i],
  role: 'MEDICAL ADVISOR',
  image: [
    '/images/deepak.png',
    '/images/avinash.png',
    '/images/dinesh.png',
    '/images/sunil.png',
    '/images/swarupa.png',
    '/images/geeta.png',
    '/images/sangeeta.png'
  ][i],
  category: 'leadership'
}));

// Clinical Team
const clinicalTeam: TeamMember[] = [
  { id: 'clinical1', name: 'Dr. Shashidhar S. Niwas', role: 'Consultant Nephrology', image: '/images/shahidhar.png', category: 'clinical' },
  { id: 'clinical2', name: 'Dr. Pawan Rawal', role: 'Consultant Gastroenterology', image: '/images/pawan.png', category: 'clinical' },
  { id: 'clinical3', name: 'Dr. Sushant Srivastava', role: 'Consultant Cardio Vascular Surgeon', image: '/images/sushant.png', category: 'clinical' },
  { id: 'clinical4', name: 'Dr. Sanjat Chiwane', role: 'Consultant Cardiology', image: '/images/sanjat.png', category: 'clinical' },
  { id: 'clinical5', name: 'Dr. Gaurav Dixit', role: 'Consultant BMT & Hematology', image: '/images/gaurav.png', category: 'clinical' },
  { id: 'clinical6', name: 'Dr. Arun C. kotaru', role: 'Consultant Respiratory/Pulmonology', image: '/images/arun.png', category: 'clinical' },

  { id: 'clinical7', name: 'Dr. Dhiraj Kapoor', role: 'Consultant Endocrinology', image: '/images/dhiraj.png', category: 'clinical' },

  { id: 'clinical8', name: 'Dr. Ayush Dhingra', role: 'Consultant Gastroenterology', image: '/images/ayush.png', category: 'clinical' },

  { id: 'clinical9', name: 'Dr. Asheesh Dhingra', role: 'Consultant Plastic Surgery', image: '/images/asheesh.png', category: 'clinical' },

  { id: 'clinical10', name: 'Dr. Om Prakash Gupta', role: 'Consultant Orthopedics', image: '/images/om.png', category: 'clinical' },

  { id: 'clinical11', name: 'Dr. Subhash Yadav', role: 'Consultant Orthopedics', image: '/images/subhash.png', category: 'clinical' },

  { id: 'clinical12', name: 'Dr. Sameer Arora', role: 'Consultant Neurology', image: '/images/smeer.png', category: 'clinical' },

  { id: 'clinical13', name: 'Dr. Vikram B. Kaushik', role: 'Consultant Urology', image: '/images/vikram.png', category: 'clinical' },

  { id: 'clinical14', name: 'Dr. Anil Yadav', role: 'Consultant Psychiatry', image: '/images/anil.png', category: 'clinical' },

  { id: 'clinical15', name: 'Dr. Shubha Bhalla', role: 'Consultant Rheumatology', image: '/images/subha.png', category: 'clinical' },

  { id: 'clinical16', name: 'Dr. Adesh Saxena', role: 'Consultant ENT', image: '/images/adesh.png', category: 'clinical' },

  { id: 'clinical17', name: 'Dr. Mitra Saxena', role: 'Consultant Gynaecology', image: '/images/mitra.png', category: 'clinical' },

  { id: 'clinical18', name: 'Dr. Ruchi Saxena', role: 'Consultant Gynaecology', image: '/images/ruchi.png', category: 'clinical' },

  { id: 'clinical19', name: 'Dr. Lalit Saxena', role: 'Consultant Pediatrics', image: '/images/lalit.png', category: 'clinical' },

  { id: 'clinical20', name: 'Dr. Shruti Aggarwal', role: 'Consultant Anesthesia', image: '/images/shruti.png', category: 'clinical' },

  { id: 'clinical21', name: 'Dr. Jagmeet Kaur', role: 'Consultant Physiotherapist', image: '/images/jagmeet.png', category: 'clinical' },

  { id: 'clinical22', name: 'Dr. Prashant Bhatia', role: 'Consultant Critical Care', image: '/images/prashant.png', category: 'clinical' },

  { id: 'clinical23', name: 'Mr. Sunil Srivastava', role: 'Consultant Dietician', image: '/images/sunil.png', category: 'clinical' },
];

// Management Team
const managementTeam: TeamMember[] = [
  { id: 'management1', name: 'Mr. Pyush Gupta', role: 'Head Business Strategist', image: '/images/pyush.png', category: 'management' },

  { id: 'management2', name: 'Mr. Bhishm Dutt', role: 'Chief Legal Advisor', image: '/images/bhism.png', category: 'management' },

  { id: 'management3', name: 'Grp Captain. Chinmoy Banerjee (Retd)', role: 'Head Digital Marketing', image: '/images/chinmoy.png', category: 'management' },

  { id: 'management4', name: 'Mr. Surendra Pratap', role: 'Head Q&A News Channel', image: '/images/surendra.png', category: 'management' },

  { id: 'management5', name: 'Mr. Braj Gupta', role: 'International Coordinator', image: '/images/braj.png', category: 'management' },

  { id: 'management6', name: 'Mr. Ratnesh Kumar', role: 'Head of Marketing Team', image: '/images/ratnesh.png', category: 'management' },
];

// Merge All
export const teamMembers: TeamMember[] = [
  ...ceoTeam,
  ...leadershipTeam,
  ...clinicalTeam,
  ...managementTeam,
];
