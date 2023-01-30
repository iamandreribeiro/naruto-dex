-- CreateTable
CREATE TABLE "ninjas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "clan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jutsu" TEXT NOT NULL,

    CONSTRAINT "ninjas_pkey" PRIMARY KEY ("id")
);
