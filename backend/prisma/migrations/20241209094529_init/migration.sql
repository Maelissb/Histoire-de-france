-- CreateTable
CREATE TABLE "Roi" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "dynastie" TEXT NOT NULL DEFAULT 'Unknown',
    "birthDate" TEXT NOT NULL,
    "deathDate" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Roi_pkey" PRIMARY KEY ("id")
);
