import { Card } from '../components/card/card';
import { useProfile, useUser } from '../hooks/supabase';
import styles from './dashboard.module.scss';

import barImage from './../assets/bar.jpg';

export const Dashboard = () => {
	const user = useUser();
	const profile = useProfile('09da043b-fbf8-4282-969a-ca7c736d2c16');
	if (profile.data) console.log(profile.data);

	console.log(barImage);

	return (
		<div className={styles.dashboard}>
			<h1>Hi Henry!</h1>
			<div />
			<Card background={barImage} color="#cb19167a">
				<h1>Bars</h1>
			</Card>
		</div>
	);
};
