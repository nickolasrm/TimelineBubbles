import { act, fireEvent } from '@testing-library/react'
import { createApp, finishApp } from './common'
import { KEY_RETURN } from 'keycode-js'

let main
let $
let tid

describe("File operations", () => {
	beforeAll(() => {
		const obj = createApp()
		main = obj.main
		$ = obj.$
		tid = obj.tid
	})

	it("New file operation", () => {
		const el = tid('bubble')[0]
		fireEvent.keyDown(el, {keyCode: KEY_RETURN})
		expect(tid('bubble').length).toBe(2)
		fireEvent.click(tid('new-button')[0])
		expect(tid('bubble').length).toBe(1)
	})

	it("Open file operation", async () => {
		const el = tid('open-input')[0]
		const file = new File([`{
			"theme":{
				"primary":"#aaaaaa",
				"accent":"#ffffff",
				"isPrinting":false
			},
			"bubbles":[
				{"identifier":1,"title":"3001","isImage":false,"comment":"ok"},
				{"identifier":2,"title":"3002","isImage":false,"comment":"ok"}
			]}`], 'bubbles.json', {type: 'text/plain'})

		await act(async () => {
			await fireEvent.change(el, {target: {files: [file]}})
			return new Promise(resolve => setTimeout(resolve, 100))
		})
		expect(tid('bubble')[0].innerHTML).toBe('3001')
		expect(tid('bubble')[1].innerHTML).toBe('3002')
	})

	it("Corrupted file opening", async () => {
		const alert = window.alert

		const el = tid('open-input')[0]
		const file = new File([`{
			"bubbles":[
				{"identifier":1,"title":"3001","isImage":false,"comment":"ok"},
				{"identifier":2,"title":"3002","isImage":false,"comment":"ok"}
			]}`], 'bubbles.json', {type: 'text/plain'})

		let triggered = false
		await act(async () => {
			window.alert = (arg) => {triggered = true}
			await fireEvent.change(el, {target: {files: [file]}})
			return new Promise(resolve => setTimeout(resolve, 100))
		})
		window.alert = alert
		expect(triggered).toBe(true)
	})

	afterAll(() => {
		finishApp(main)
	})
})