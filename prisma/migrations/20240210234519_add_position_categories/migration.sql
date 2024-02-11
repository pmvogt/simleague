-- CreateEnum
CREATE TYPE "PositionCategory" AS ENUM ('OFFENSE', 'DEFENSE', 'SPECIAL_TEAMS');

-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "category" "PositionCategory" NOT NULL DEFAULT 'OFFENSE';
