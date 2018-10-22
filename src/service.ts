import micro, { createError } from 'micro'
import { parse } from 'url'

const error = (status = 404, body = 'not found') => createError(status, body)

export const service = micro(async req => {
	const { url } = req
	if (!url) {
		throw error()
	}
	const parsed = parse(url)
	const { pathname } = parsed
	if (!pathname) {
		throw error()
	}
	return pathname
})
