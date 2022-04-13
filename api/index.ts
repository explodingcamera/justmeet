import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { WebSocketServer } from 'ws';
import { appRouter } from './router';

export type Context = Record<string, unknown>;
export type AppRouter = typeof appRouter;

// http server
const { server, listen } = createHTTPServer({
	router: appRouter,
	createContext() {
		return {};
	},
});

// ws server
const wss = new WebSocketServer({ server });
applyWSSHandler<AppRouter>({
	wss,
	router: appRouter,
	createContext() {
		return {};
	},
});

listen(2022);
console.log('API listening on http://localhost:2022');
