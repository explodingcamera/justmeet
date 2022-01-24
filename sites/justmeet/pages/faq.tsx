import styles from './faq.module.scss';

const items: Array<{
	q: string;
	a: string;
}> = [
	{
		q: 'What is JustMeet?',
		a: 'test',
	},
	{
		q: 'Why do I need to get verified?',
		a: 'test',
	},
	{
		q: 'Why do I need to get verified?',
		a: 'test',
	},
	{
		q: 'Why can I only sign up with discord?',
		a: 'test',
	},
	{
		q: 'Is this free?',
		a: 'Yes.',
	},
	{
		q: 'Can I use JustMeet for dating?',
		a: 'No.',
	},
	{
		q: 'How am I protected from creeps?',
		a: '',
	},
];

export const Faq = () => (
	<div className={styles.faq}>
		<ul>
			<h1>FAQ</h1>
			{items.map(i => (
				<li key={i.q}>
					<details open>
						<summary>
							<h1>{i.q}</h1>
						</summary>
						{i.a}
					</details>
				</li>
			))}
		</ul>
	</div>
);
