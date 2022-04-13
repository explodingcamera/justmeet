import { createClient } from 'edgedb';
import e from './../dbschema/edgeql-js';

export const connect = () => createClient();
export { e };
