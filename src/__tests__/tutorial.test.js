import { screen, fireEvent } from '@testing-library/react'
import { createApp, finishApp } from './common'

let main
let $
let tid

describe("Tutorial", () => {
	beforeAll(() => {
		const obj = createApp()
		main = obj.main
		$ = obj.$
		tid = obj.tid
	})

	it("Goes to tutorial", () => {
		const el = tid('go-to-tutorial-button')[0]
		fireEvent.click(el)
		expect(screen.getByTestId('greetings')).toBeDefined()
	})

	it("Goes to app", () => {
		const el = tid('go-to-app-button')[0]
		fireEvent.click(el)
		expect(screen.getByTestId('bubble')).toBeDefined()
	})

	afterAll(() => {
		finishApp(main)
	})
})