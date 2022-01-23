import React from 'react';
import styles from './index.module.scss';
import '@snowstorm/core/base.css';
import './global.css';

export const Layout: React.FC = ({ children }) => (
	<div className={styles.layout}>
		<div className={styles.header} />
		<div className={styles.content}>{children}</div>
		<div className={styles.footer}>
			<a
				href="https://henrygressmann.de/impressum"
				target="_blank"
				referrerPolicy="no-referrer"
				rel="noreferrer"
			>
				legal notice/privacy policy
			</a>
		</div>
	</div>
);
