import z from 'zod';

import { createRouter } from '../router';

import { checkHash, hashPw } from '../utils/hash';
import { genToken } from '../utils/jwt';

import * as error from '../utils/error';

export const users = createRouter()
	.mutation('login', {
		input: z.object({
			password: z.string(),
			email: z.string(),
		}),
		async resolve({ ctx: { prisma }, input: { password, email } }) {
			const user = await prisma.user
				.findUnique({
					where: { email },
				})
				.catch(error.errorBadRequest);

			if (user instanceof error.TRPCError) throw user;
			if (!(await checkHash(user.password, password)))
				throw error.errorBadRequest();

			return genToken(user.id);
		},
	})
	.mutation('create', {
		input: z.object({
			firstName: z.string(),
			password: z.string(),
			email: z.string(),
		}),
		resolve: async ({
			ctx: { prisma },
			input: { password, firstName, email },
		}) =>
			prisma.user
				.create({
					data: {
						email,
						firstName,
						password: await hashPw(password),
					},
				})
				.then(async user => genToken(user.id))
				.catch(error.errorBadRequest),
	});
