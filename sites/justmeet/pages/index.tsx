import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from '@snowstorm/core';
import { useAPI } from '../hooks/context';

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
	const _api = useAPI();
	const onLogin = async () => undefined;
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
					<button type="button" onClick={onLogin}>
						Login
					</button>
					<button type="button" onClick={onLogin}>
						Sign up
					</button>
					<Link to="/faq">
						<button type="button">FAQ</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
