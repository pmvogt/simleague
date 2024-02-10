/*
  Warnings:

  - You are about to drop the column `positionId` on the `Player` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_positionId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "positionId";

-- CreateTable
CREATE TABLE "PlayerPosition" (
    "playerId" INTEGER NOT NULL,
    "positionId" INTEGER NOT NULL,

    CONSTRAINT "PlayerPosition_pkey" PRIMARY KEY ("playerId","positionId")
);

-- AddForeignKey
ALTER TABLE "PlayerPosition" ADD CONSTRAINT "PlayerPosition_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerPosition" ADD CONSTRAINT "PlayerPosition_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
