import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardList } from './nav-components/CardList/CardList'
import { CardPage } from './nav-components/CardPage/CardPage'

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<CardList />} />
			<Route path="/challenges/:cardId" element={<CardPage />} />
		</Routes>
	</BrowserRouter>
)
