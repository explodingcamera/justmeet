import { SnowstormCustomAppProps } from '@snowstorm/core/types';
import { Layout } from '../components/layout';
import { SupabaseContext } from '../hooks/supabase';

const App = ({ children }: SnowstormCustomAppProps) => (
	<Layout>
		<SupabaseContext>{children}</SupabaseContext>
	</Layout>
);
export default App;
