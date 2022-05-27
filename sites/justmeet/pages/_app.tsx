import { FC } from 'react';
import { Layout } from '../components/layout';

const App: FC<{ children: React.ReactElement }> = ({ children }) => (
	<Layout>{children}</Layout>
);
export default App;
