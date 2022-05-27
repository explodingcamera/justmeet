import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { applyWSSHandler } from '@trpc/server/adapters/ws';

import { WebSocketServer } from 'ws';
import router from './router';
import { createContext } from './context';

// http server
const { server, listen } = createHTTPServer({
	router,
	createContext,
});

// ws server
const wss = new WebSocketServer({ server });
applyWSSHandler<typeof router>({
	wss,
	router,
	createContext,
});

listen(2022);
console.log('API listening on http://localhost:2022');
