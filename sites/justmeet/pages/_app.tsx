import { FC } from 'react';
import { Layout } from '../components/layout';
import { SupabaseContext } from '../hooks/supabase';

const App: FC = ({ children }) => (
	<Layout>
		<SupabaseContext>{children}</SupabaseContext>
	</Layout>
);
export default App;
