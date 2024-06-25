-- CreateTable
CREATE TABLE "Recomendation" (
    "id" TEXT NOT NULL,
    "friend_one" TEXT NOT NULL,
    "friend_two" TEXT NOT NULL,
    "sale" TEXT[],
    "total" DECIMAL(65,30) NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Recomendation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recomendation" ADD CONSTRAINT "Recomendation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
