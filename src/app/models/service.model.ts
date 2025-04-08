export interface Benefit {
  title: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  details: {
    duration: string;
    frequency: string;
    includes: string;
    results: string;
  };
  benefits: {
    title: string;
    description: string;
  }[];
}
