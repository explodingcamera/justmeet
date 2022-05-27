import { TRPCError } from '@trpc/server';

export const errorBadRequest = (e?: unknown) =>
	new TRPCError({
		code: 'BAD_REQUEST',
		message: 'An unexpected error occurred, please try again later.',
		cause: e,
	});

export const errorUnauthorized = () =>
	new TRPCError({
		code: 'UNAUTHORIZED',
	});

export { TRPCError };
