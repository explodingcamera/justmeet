import { Context } from '../context';
import { errorUnauthorized } from './error';

export const isAuthenticated = (ctx: Context) => {
	if (!ctx.user) throw errorUnauthorized();
};
