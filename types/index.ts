export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    category: 'ceo' | 'leadership' | 'clinical' | 'management';
  }