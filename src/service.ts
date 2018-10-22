import micro, { createError } from 'micro'
import { parse } from 'url'
import { classify } from './services'

const error = (status = 404, body = 'not found') => createError(status, body)

export const service = micro(async req => {
	const parsed = parse(req.url || '')
	const { pathname } = parsed
	if (req.method !== 'POST') {
		throw error()
	}

	switch (pathname) {
		case '/classify':
			return classify(req)
		default:
			throw error()
	}
})
