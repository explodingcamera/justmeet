import { FC } from 'react';
import styles from './card.module.scss';

export const Card: FC<{ background: string; color: string }> = ({
	children,
	color,
	background,
}) => (
	<div
		style={{
			boxShadow: `2px 4px 12px 2px ${color}, 0 0 2rem 4px #00000012`,
			backgroundImage: `url(${background})`,
		}}
		className={styles.card}
	>
		{children}
	</div>
);
