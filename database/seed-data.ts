interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pentiente: Veniam voluptate nisi sunt ea.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En-Progreso: Laboris officia et tempor quis pariatur.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminada: Culpa excepteur qui ut voluptate officia commodo officia.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
