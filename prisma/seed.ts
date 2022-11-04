import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.article;

async function main() {
  await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Prisma now supports MongoDB as a database connector. This means you can now use Prisma to query MongoDB databases.',
      description:
        'Prisma now supports MongoDB as a database connector. This means you can now use Prisma to query MongoDB databases.',
      published: false,
    },
  });

  await prisma.article.upsert({
    where: { title: "What's new in Prisma?" },
    update: {},
    create: {
      title: "What's new in Prisma?",
      body: 'Prisma 2.0 is out with a new query engine, a new CLI, and a new language client.',
      description:
        'Prisma 2.0 is out with a new query engine, a new CLI, and a new language client.',
      published: true,
    },
  });
}

main()
  .catch((e) => {
    console.log({ e });
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
