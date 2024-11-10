-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "homeScore" INTEGER,
    "awayScore" INTEGER,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
