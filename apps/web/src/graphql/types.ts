export interface Match {
    id: string;
    date: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number | null;
    awayScore: number | null;
  }
  
  export interface GetMatchesData {
    matches: Match[];
  }

  export interface SaveMatchesMutationData {
    saveMatches: boolean;  
  }
  