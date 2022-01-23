import { SnowstormCustomAppProps } from '@snowstorm/core/types';
import { Layout } from '../components/layout';

const App = ({ children }: SnowstormCustomAppProps) => (
	<Layout>{children}</Layout>
);
export default App;
