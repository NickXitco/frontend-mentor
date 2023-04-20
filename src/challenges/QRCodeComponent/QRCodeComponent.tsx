import { FC, useEffect } from 'react'
import styles from './QRCodeComponent.module.scss'
import qrCode from './qr-code-component-main/images/image-qr-code.png'
export interface QRCodeComponentProps {}

export const QRCodeComponent: FC<QRCodeComponentProps> = () => {
	useEffect(() => {
		document.title = 'Frontend Mentor | QR code component'
	})
	return (
		<div className={styles.outer}>
			<div className={styles.container}>
				<div className={styles.image_container}>
					<img src={qrCode} alt={'QR Code'} className={styles.image} />
				</div>

				<div className={styles.text}>
					<h2>Improve your front-end skills by building projects</h2>
					<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
				</div>
			</div>
		</div>
	)
}
