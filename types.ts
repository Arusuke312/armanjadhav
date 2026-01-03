export type Tab = 'dashboard' | 'spending' | 'education' | 'goals' | 'controls';

export interface Transaction {
  id: string;
  merchant: string;
  logo: string;
  amount: number;
  date: string;
  category: string;
}

export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  image: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article';
  duration: string;
  progress: number;
  thumbnail: string;
}

export interface SpendingCategory {
  name: string;
  value: number;
  color: string;
}
