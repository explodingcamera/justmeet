import { router } from '@trpc/server';
import { Context } from './context';
import { users } from './routes/users';

export const createRouter = () => router<Context>();

export default router<Context>().merge('users', users);
