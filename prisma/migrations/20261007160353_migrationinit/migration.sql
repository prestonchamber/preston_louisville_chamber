-- AlterTable
ALTER TABLE "two_factor" ADD COLUMN     "failed_verification_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "locked_until" TIMESTAMPTZ(6),
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "display_username" TEXT;
