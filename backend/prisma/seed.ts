/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.roi.create({
    data: {
      image:
        'https://www.histoiredefrance.net/wp-content/uploads/2020/03/Clovis-1.jpg',
      name: 'Clovis Ier (481–511)',
      dynastie: 'Mérovingiens', 
      birthDate: '27 février 466 à Tournai, Royaume des Francs',
      deathDate: '511 à Paris, Royaume des Francs',
      description:
        'Clovis Ier est le premier roi des Francs à unifier une grande partie de la Gaule. Il est connu pour avoir adopté le christianisme...',
    },
  });

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
