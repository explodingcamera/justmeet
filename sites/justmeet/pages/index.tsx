import styles from './index.module.scss';
import TextLoop from 'react-text-loop';

const text = [
	'bouldering',
	'running',
	'camping',
	'on festivals',
	'on raves',
	'in bars',
	'partying',
];

export const Index = () => (
	<div className={styles.landingpage}>
		<div className={styles.hero}>
			<h1>JustMeet</h1>
			<h2>
				Meet new friends{' '}
				<TextLoop
					interval={3000}
					delay={0}
					adjustingSpeed={150}
					fade
					mask={false}
					springConfig={{ stiffness: 340, damping: 30 }}
					noWrap
				>
					{text.map(t => (
						<span key={t}>{t}</span>
					))}
				</TextLoop>
			</h2>
			<div className={styles.actions}>
				<button type="button">Sign me up!</button>
				<button type="button">Sign in</button>
				<button type="button">FAQ</button>
			</div>
		</div>
	</div>
);
