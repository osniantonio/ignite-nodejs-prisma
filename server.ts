import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de NodeJS",
      description: "Curso excelente de NodeJS",
    },
  });

  console.log(result);
}

main();
