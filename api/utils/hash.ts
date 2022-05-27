import argon2, { argon2id } from 'argon2';

export const hashPw = async (pw: string) => argon2.hash(pw, { type: argon2id });
export const checkHash = async (hash: string, pw: string) =>
	argon2.verify(hash, pw, { type: argon2id });
