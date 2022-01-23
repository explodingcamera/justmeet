import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import TextTransition, { presets } from 'react-text-transition';

const t = [
	'bouldering',
	'running',
	'camping',
	'on festivals',
	'on raves',
	'in bars',
	'partying',
];

export const Index = () => {
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const intervalId = setInterval(() => setIndex(i => i + 1), 3000);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className={styles.landingpage}>
			<div className={styles.hero}>
				<h1>JustMeet</h1>
				<h2>
					Meet new friends{' '}
					<TextTransition
						text={t[index % t.length]}
						inline
						springConfig={presets.default}
					/>
				</h2>
				<div className={styles.actions}>
					<button type="button">Sign me up!</button>
					<button type="button">Sign in</button>
					<button type="button">FAQ</button>
				</div>
			</div>
		</div>
	);
};
