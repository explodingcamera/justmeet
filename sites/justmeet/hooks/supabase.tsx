import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { createContext, useContext, FC } from 'react';

import { definitions } from '../../../types/supabase';

const SupabaseCtx = createContext<SupabaseClient>(undefined);

export const SupabaseContext: FC = ({ children }) => {
	const supabase = createClient(
		'https://vazbvduuzjuqfcesotjp.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTEwNTY1MCwiZXhwIjoxOTUwNjgxNjUwfQ.ehIj8ZbzaoooJ9kCjXlMvlJLCSPQldklwhTKclL43Jo',
		{},
	);

	return (
		<SupabaseCtx.Provider value={supabase}>{children}</SupabaseCtx.Provider>
	);
};

export const useSupabase = () => useContext(SupabaseCtx);

export const useUser = (): User | undefined =>
	useSupabase().auth.user() || undefined;

export const getProfileByID = async (
	supabase: SupabaseClient,
	userID: string,
) => {
	const { data, error } = await supabase
		.from<definitions['profiles']>('profiles')
		.select('*')
		.eq('user_id', userID)
		.single();

	if (error) {
		throw new Error(error.message);
	}

	if (!data) {
		throw new Error('Profile not found');
	}

	return data;
};

export const login = async (supabase: SupabaseClient) => {
	await supabase.auth.signIn(
		{
			provider: 'discord',
		},
		{ redirectTo: 'http://justmeet.localhost:2020/dashboard' },
	);
};
