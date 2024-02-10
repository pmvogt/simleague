-- CreateEnum
CREATE TYPE "Division" AS ENUM ('AFC_EAST', 'AFC_WEST', 'AFC_NORTH', 'AFC_SOUTH', 'NFC_EAST', 'NFC_WEST', 'NFC_NORTH', 'NFC_SOUTH');

-- CreateEnum
CREATE TYPE "NFLTeam" AS ENUM ('ARIZONA_CARDINALS', 'ATLANTA_FALCONS', 'BALTIMORE_RAVENS', 'BUFFALO_BILLS', 'CAROLINA_PANTHERS', 'CHICAGO_BEARS', 'CINCINNATI_BENGALS', 'CLEVELAND_BROWNS', 'DALLAS_COWBOYS', 'DENVER_BRONCOS', 'DETROIT_LIONS', 'GREEN_BAY_PACKERS', 'HOUSTON_TEXANS', 'INDIANAPOLIS_COLTS', 'JACKSONVILLE_JAGUARS', 'KANSAS_CITY_CHIEFS', 'LAS_VEGAS_RAIDERS', 'LOS_ANGELES_CHARGERS', 'LOS_ANGELES_RAMS', 'MIAMI_DOLPHINS', 'MINNESOTA_VIKINGS', 'NEW_ENGLAND_PATRIOTS', 'NEW_ORLEANS_SAINTS', 'NEW_YORK_GIANTS', 'NEW_YORK_JETS', 'PHILADELPHIA_EAGLES', 'PITTSBURGH_STEELERS', 'SAN_FRANCISCO_49ERS', 'SEATTLE_SEAHAWKS', 'TAMPA_BAY_BUCCANEERS', 'TENNESSEE_TITANS', 'WASHINGTON_FOOTBALL_TEAM');

-- CreateTable
CREATE TABLE "Playbook" (
    "id" SERIAL NOT NULL,
    "team" "NFLTeam" NOT NULL,
    "scheme" TEXT,

    CONSTRAINT "Playbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" "NFLTeam" NOT NULL,
    "prettyName" TEXT NOT NULL,
    "division" "Division" NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "gmId" INTEGER NOT NULL,
    "offensivePlaybookId" INTEGER NOT NULL,
    "defensivePlaybookId" INTEGER NOT NULL,
    "offensiveScheme" TEXT,
    "defensiveScheme" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "discordName" TEXT NOT NULL,
    "prettyName" TEXT NOT NULL,
    "teamId" INTEGER,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "teamId" INTEGER,
    "positionId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playbook_team_key" ON "Playbook"("team");

-- CreateIndex
CREATE UNIQUE INDEX "Team_gmId_key" ON "Team"("gmId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gmId_fkey" FOREIGN KEY ("gmId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_offensivePlaybookId_fkey" FOREIGN KEY ("offensivePlaybookId") REFERENCES "Playbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_defensivePlaybookId_fkey" FOREIGN KEY ("defensivePlaybookId") REFERENCES "Playbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
