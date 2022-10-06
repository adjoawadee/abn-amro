export default interface Show {
  id: number;
  name: string;
  language: string;
  genres: string[];
  runtime: number;
  rating: {
    average: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
