import styles from './CardList.module.scss'
import { Card, CardProps } from '../Card/Card'
import { QRCodeComponent } from '../../challenges/QRCodeComponent'

export const cards: CardProps[] = [
	{
		id: 'qr-code-component',
		title: 'QR Code Component',
		source: 'Frontend Mentor',
		description:
			"A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
		challengeURL: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
		img: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1642681473/Challenges/lzfaukzhigbavv5sc26b.jpg',
		component: QRCodeComponent,
	},
]
export const CardList = () => {
	return (
		<div className={'full-screen-center'}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1>Front End Challenges</h1>
					<p>A collection of challenge submissions from various sites</p>
				</header>

				<ul className={styles.card_list}>
					{cards.map((card) => (
						<li key={card.id}>
							<Card {...card} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
