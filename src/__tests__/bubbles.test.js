import { fireEvent } from '@testing-library/react'
import { KEY_RETURN, KEY_BACK_SPACE } from 'keycode-js'
import { createApp, finishApp } from './common'

let main
let $
let tid

describe("Bubble manipulation", () => {
	beforeAll(() => {
		const obj = createApp()
		main = obj.main
		$ = obj.$
		tid = obj.tid
	})

	it("Rendered without problems", () => {
		const el = tid('bubble')
		expect(el.length).not.toBe(0)
	})

	it("Adding abubble", () => {
		const el = tid('bubble')[0]
		fireEvent.keyDown(el, {keyCode: KEY_RETURN})
		expect(tid('bubble').length).toBe(2)
	})

	it("Removing abubble", () => {
		const el = tid('bubble')[1]
		fireEvent.input(el, {target: {innerHTML: ''}})
		fireEvent.keyDown(el, {keyCode: KEY_BACK_SPACE})
		expect(tid('bubble').length).toBe(1)
	})

	it("Preventing to remove the lastbubble", () => {
		const el = tid('bubble')[0]
		fireEvent.input(el, {target: {innerHTML: ''}})
		fireEvent.keyDown(el, {keyCode: KEY_BACK_SPACE})
		expect(tid('bubble').length).toBe(1)
	})

	afterAll(() => {
		finishApp(main)
	})
})