import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext, FC } from 'react';

const SupabaseCtx = createContext<SupabaseClient>();

export const SupabaseContext: FC = ({ children }) => {
	const supabase = createClient(
		'https://justmeet.supabase.com',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTEwNTY1MCwiZXhwIjoxOTUwNjgxNjUwfQ.ehIj8ZbzaoooJ9kCjXlMvlJLCSPQldklwhTKclL43Jo',
		{},
	);

	return (
		<SupabaseCtx.Provider value={supabase}>{children}</SupabaseCtx.Provider>
	);
};

export const useSupabase = () => useContext(SupabaseCtx);
