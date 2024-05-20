import { PrismaClient } from '@prisma/client';

let prismaDb: PrismaClient;

declare global {
	var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
	prismaDb = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prismaDb = global.prisma;
}
export default prismaDb;
