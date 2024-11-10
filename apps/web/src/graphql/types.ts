export interface Match {
    id: number;
    date: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number | null;
    awayScore: number | null;
  }
  
  export interface GetMatchesData {
    matches: Match[];
  }
  