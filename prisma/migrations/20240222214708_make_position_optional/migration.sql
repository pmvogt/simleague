/*
  Warnings:

  - You are about to drop the `PlayerPosition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlayerPosition" DROP CONSTRAINT "PlayerPosition_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerPosition" DROP CONSTRAINT "PlayerPosition_positionId_fkey";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "positionId" INTEGER;

-- DropTable
DROP TABLE "PlayerPosition";

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;
