import { act, fireEvent } from '@testing-library/react'
import { createApp, finishApp } from './common'
import { KEY_SHIFT, KEY_RETURN } from 'keycode-js'

let main
let $
let tid

describe("Comment writing", () => {
	beforeAll(() => {
		const obj = createApp()
		main = obj.main
		$ = obj.$
		tid = obj.tid
	})

	it("Changing title", () => {
		const el = tid('bubble')[0]
		fireEvent.change(el, { target: { innerHTML: '3001' } })
		expect(el.innerHTML).toBe('3001')
	})

	it("Bubble creation prevention for multiline title input", () => {
		const el = tid('bubble')[0]
		fireEvent.keyDown(el, { keyCode: { KEY_SHIFT } })
		fireEvent.keyDown(el, { keyCode: { KEY_RETURN } })
		expect(tid('bubble').length).toBe(1)
	})

	it("Comment writing", () => {
		const el = tid('comment_textarea')[0]
		fireEvent.input(el, { target: { innerHTML: "T" } })
		expect(el.innerHTML).toBe("T")
	})

	it("Image comment", async () => {
		const el = tid('to_image_comment_input')[0]
		const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })

		await act(async () => {
			await fireEvent.change(el, {target: {files: [file]}})
			return new Promise(resolve => setTimeout(resolve, 100))
		})
		expect(tid('comment_image')[0]).toBeDefined()
	})

	it("Back to text mode", () => {
		const el = tid('to_text_comment_button')[0]
		fireEvent.click(el)
		expect(tid('comment_textarea')[0]).toBeDefined()
	})

	afterAll(() => {
		finishApp(main)
	})
})