const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Criar categoria base
  const category = await prisma.category.upsert({
    where: { slug: 'conjuntos' },
    update: {},
    create: {
      name: 'Conjuntos',
      slug: 'conjuntos',
    },
  });

  const products = [
    {
      name: 'Conjunto Lilás',
      slug: 'conjunto-lilas',
      price: 237.41,
      imageUrl: '/assets/images/products/conjunto-lilas.jpeg',
      badge: 'Lançamento',
      isNew: true,
      categoryId: category.id,
    },
    {
      name: 'Conjunto Plus Size 2',
      slug: 'conjunto-plus-size-2',
      price: 132.91,
      imageUrl: '/assets/images/products/plussize2.jpeg',
      badge: 'Lançamento',
      isNew: true,
      categoryId: category.id,
    },
    {
      name: 'Conjunto Rosa',
      slug: 'conjunto-rosa',
      price: 237.41,
      imageUrl: '/assets/images/products/conjunto-rosa.jpeg',
      badge: 'Lançamento',
      isNew: true,
      categoryId: category.id,
    },
    {
      name: 'Conjunto Verde',
      slug: 'conjunto-verde',
      price: 227.91,
      imageUrl: '/assets/images/products/conjunto-verde.jpeg',
      badge: 'Lançamento',
      isNew: true,
      categoryId: category.id,
    },
    {
      name: 'Conjunto Plus Size 1',
      slug: 'conjunto-plus-size-1',
      price: 236.55,
      imageUrl: '/assets/images/products/plussize1.jpeg',
      categoryId: category.id,
    },
    {
      name: 'Conjunto Bege',
      slug: 'conjunto-bege',
      price: 151.05,
      imageUrl: '/assets/images/products/conjunto-bege.jpeg',
      categoryId: category.id,
    },
    {
      name: 'Conjunto Vermelho',
      slug: 'conjunto-vermelho',
      price: 237.41,
      imageUrl: '/assets/images/products/conjunto-vermelho.jpeg',
      categoryId: category.id,
    },
    {
      name: 'Conjunto Tricolor',
      slug: 'conjunto-tricolor',
      price: 322.91,
      imageUrl: '/assets/images/products/conjunto-tricolor.jpeg',
      categoryId: category.id,
    }
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
  }

  console.log('Seed completo: Categoria e Produtos inseridos.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
