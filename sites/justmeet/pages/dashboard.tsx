import { Card } from '../components/card/card';
import styles from './dashboard.module.scss';

import barImage from './../assets/bar.jpg';

export const Dashboard = () => (
	<div className={styles.dashboard}>
		<h1>Hi Henry!</h1>
		<div />
		<Card background={barImage} color="#cb19167a">
			<h1>Bars</h1>
		</Card>
	</div>
);
