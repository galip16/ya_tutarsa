import prisma from "../../prisma";
import { getMatchInfo } from "../utils/getMatchInfo";
import { teams } from "./teams";

export const matchMutation = {
  saveMatches: async () => {
    const allMatches = [];

    for (let index = 0; index < teams.length; index++) {
      const team = teams[index];
      const match = await getMatchInfo(team);

      // Match verisi database'de yoksa ekle
      const existingMatch = await prisma.match.findFirst({
        where: {
          date: match.date,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
        },
      });

      if (!existingMatch) {
        allMatches.push(match);
      }
    }

    if (allMatches.length > 0) {
      await prisma.match.createMany({
        data: allMatches,
      });
    }

    return true;
  },
};
