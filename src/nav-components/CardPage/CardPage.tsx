import { useParams } from 'react-router-dom'
import { cards } from '../CardList/CardList'
import styles from './CardPage.module.scss'
import { getSource } from '../Card/Card'

export const CardPage = () => {
	const { cardId } = useParams()
	const card = cards.find((card) => card.id === cardId)

	if (!card) {
		return <div>Card not found</div>
	}

	const Component = card.component

	return (
		<div className={'full-screen-center'}>
			<a className={styles.tooltip} href={card.challengeURL}>
				<img src={getSource(card.source)} alt={card.source} className={styles.icon} />
				<div className={styles.text}>
					<strong>{card.title}</strong>
					<p>from {card.source}</p>
				</div>
			</a>
			<Component />
		</div>
	)
}
