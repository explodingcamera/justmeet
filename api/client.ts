import type { AppRouter } from './index.js';
import { createTRPCClient, CreateTRPCClientOptions } from '@trpc/client';

export type Opts = CreateTRPCClientOptions<AppRouter>;
export const createClient = (opts: Opts) =>
	createTRPCClient<AppRouter>({
		url: 'http://localhost:5000/trpc',
		...opts,
	});
