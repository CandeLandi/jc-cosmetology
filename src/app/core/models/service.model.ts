export interface Benefit {
  title: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  imageUrl?: string;
  benefits: Benefit[];
}
