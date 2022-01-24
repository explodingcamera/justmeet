import { SnowstormCustomAppProps } from '@snowstorm/core/types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from '../components/layout';
import { SupabaseContext } from '../hooks/supabase';

const queryClient = new QueryClient();

const App = ({ children }: SnowstormCustomAppProps) => (
	<Layout>
		<QueryClientProvider client={queryClient}>
			<SupabaseContext>{children}</SupabaseContext>
		</QueryClientProvider>
	</Layout>
);
export default App;
