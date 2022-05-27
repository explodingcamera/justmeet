import { PrismaClient } from '@prisma/client';
import { IncomingMessage } from 'http';
import { verifyToken } from './utils/jwt';

export type Context = {
	prisma: PrismaClient;
	user?: {
		id: string;
	};
};

const prismaClient = new PrismaClient();

export const createContext = async ({ req }: { req: IncomingMessage }) => {
	const ctx: Context = {
		prisma: prismaClient,
	};

	if (req.headers.authorization) {
		const user = await verifyToken(req.headers.authorization);
		ctx.user = {
			id: user.payload.sub,
		};
	}

	return ctx;
};
