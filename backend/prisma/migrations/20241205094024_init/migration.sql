-- CreateTable
CREATE TABLE "Roi" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "nom" TEXT NOT NULL,
    "dynastie" TEXT NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "Roi_pkey" PRIMARY KEY ("id")
);
