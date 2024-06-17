-- CreateTable
CREATE TABLE "referral" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "friends" TEXT[],

    CONSTRAINT "referral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "referral_cpf_key" ON "referral"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "referral_email_key" ON "referral"("email");
