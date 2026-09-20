const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 กำลังสร้าง Seed Data กิจกรรม...');

  const activities = [
    { 
      activity_name: 'Bamboo Rafting', 
      description: 'Relax and float down the Mae Taeng River on a traditional bamboo raft.', 
      price_adult: 1200.00, 
      price_child: 800.00, 
      session_type: 'Half-day Morning', 
      is_active: true 
    },
    { 
      activity_name: 'Elephant Feeding', 
      description: 'Interact with elephants and feed them organic fruits.', 
      price_adult: 900.00, 
      price_child: 500.00, 
      session_type: 'Half-day Morning', 
      is_active: true 
    },
    { 
      activity_name: 'Elephant Bathing', 
      description: 'Enjoy bathing with elephants in the river.', 
      price_adult: 1500.00, 
      price_child: 1000.00, 
      session_type: 'Half-day Afternoon', 
      is_active: true 
    },
    { 
      activity_name: 'Elephant Jungle Trekking', 
      description: 'Walk alongside gentle giants through natural tropical forests.', 
      price_adult: 1800.00, 
      price_child: 1200.00, 
      session_type: 'Half-day Afternoon', 
      is_active: true 
    },
    { 
      activity_name: 'Vitamin Making', 
      description: 'Learn and prepare healthy herbal supplements for elephants.', 
      price_adult: 800.00, 
      price_child: 400.00, 
      session_type: 'Half-day Morning', 
      is_active: true 
    },
    { 
      activity_name: 'Ziplining', 
      description: 'Experience exhilarating zipline courses through the lush canopy trees.', 
      price_adult: 2000.00, 
      price_child: 1500.00, 
      session_type: 'Half-day Afternoon', 
      is_active: true 
    }
  ];

  for (const act of activities) {
    await prisma.activity.create({ data: act });
  }

  console.log('✅ Seed activities created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });