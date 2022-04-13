import { router } from '@trpc/server';
import { Context } from '.';
import { z } from 'zod';

export const appRouter = router<Context>()
	.query('getUser', {
		input(val: unknown) {
			if (typeof val === 'string') return val;
			throw new Error(`Invalid input: ${typeof val}`);
		},
		async resolve(req) {
			// req.input; // string
			return { id: req.input, name: 'Bilbo' };
		},
	})
	.mutation('createUser', {
		// validate input with Zod
		input: z.object({ name: z.string().min(5) }),
		async resolve(req) {
			// use your ORM of choice
			return {};
		},
	});
