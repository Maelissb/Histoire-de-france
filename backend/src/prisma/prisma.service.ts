//prisma.service.ts qui est responsable de l'interaction avec la base de données via Prisma

import { Injectable } from '@nestjs/common'; // ce module fournit des outils et des decorateur d'applications NestJS
import { PrismaClient } from '@prisma/client'; //Il s'agit du client généré automatiquement par Prisma pour interagir avec la base de données

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // Appelle le constructeur de PrismaClient pour initialiser la connexion à la base de données
    super();
  }
}
