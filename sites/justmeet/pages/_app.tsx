import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from '../components/layout';
import { SupabaseContext } from '../hooks/supabase';

const queryClient = new QueryClient();

const App: FC = ({ children }) => (
	<Layout>
		<QueryClientProvider client={queryClient}>
			<SupabaseContext>{children}</SupabaseContext>
		</QueryClientProvider>
	</Layout>
);
export default App;
