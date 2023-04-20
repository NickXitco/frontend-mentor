import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import frontendMentor from '../../icons/frontend-mentor.png'

type ChallengeSource = 'Frontend Mentor'
export interface CardProps {
	title: string
	description: string
	id: string
	img: string
	challengeURL: string
	component: FC
	source: ChallengeSource
}

export const Card: FC<CardProps> = (props) => {
	return (
		<Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
			<div key={props.id} className={styles.card}>
				<div className={styles.img_container}>
					<img src={props.img} className={styles.img} alt={props.title} />
					<img src={getSource(props.source)} alt={props.source} className={styles.icon} />
				</div>

				<div className={styles.content}>
					<h2>{props.title}</h2>
					<p>{props.description}</p>
				</div>
			</div>
		</Link>
	)
}

export const getSource = (source: ChallengeSource) => {
	switch (source) {
		case 'Frontend Mentor':
			return frontendMentor
	}
}
