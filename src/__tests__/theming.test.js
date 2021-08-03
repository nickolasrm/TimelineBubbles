import { fireEvent } from '@testing-library/react'
import { createApp, finishApp } from './common'

let main
let $
let tid

describe("Theming", () => {
	beforeAll(() => {
		const obj = createApp()
		main = obj.main
		$ = obj.$
		tid = obj.tid
	})

	it("Primary color change", () => {
		const el = tid('primary-selector')[0]
		fireEvent.change(el, {target: {value: '#aaaaaa'}})
		const theme = tid('theme-style')[0]
		expect(theme.innerHTML).toMatch(/#aaaaaa/i)
	})

	it("Accent color change", () => {
		const el = tid('accent-selector')[0]
		fireEvent.change(el, {target: {value: '#123456'}})
		const theme = tid('theme-style')[0]
		expect(theme.innerHTML).toMatch(/#123456/i)
	})

	it("Bubbles font color changing to black", () => {
		const el = tid('primary-selector')[0]
		fireEvent.change(el, {target: {value: '#ffffff'}})
		const theme = tid('theme-style')[0]
		expect(theme.innerHTML).toMatch(/bubble-foreground: #000000/i)
	})

	it("Bubbles font color changing to white", () => {
		const el = tid('primary-selector')[0]
		fireEvent.change(el, {target: {value: '#000000'}})
		const theme = tid('theme-style')[0]
		expect(theme.innerHTML).toMatch(/bubble-foreground: #ffffff/i)
	})

	afterAll(() => {
		finishApp(main)
	})
})