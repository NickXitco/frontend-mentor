import { ComponentMeta } from '@storybook/react'
import { QRCodeComponent as Component, QRCodeComponentProps } from './QRCodeComponent'

// noinspection JSUnusedGlobalSymbols
export default {
	title: 'QRCodeComponent',
	component: Component,
} as ComponentMeta<typeof Component>

export const QRCodeComponent = (args: any) => <Component {...args} />

const args: QRCodeComponentProps = {
}

QRCodeComponent.args = args
