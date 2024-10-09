export interface Job {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
}

export interface FavoriteJob {
  isFavorite: boolean;
  jobId: number;
}

export interface DetailedJob {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  location: string;
  industries: string;
  types: string;
  description: string;
  publishDate: string;
}
