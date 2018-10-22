import * as assert from 'assert'
// tslint:disable-next-line:no-require-imports
import listen = require('test-listen')
import { service } from './service'
import { get } from './lib/get'

let url: string

describe('Serve', () => {
	before(async () => {
		url = await listen(service)
	})

	it('Get', async () => {
		const result = await get<string>(`${url}/test`)
		assert.deepStrictEqual(result, '/test')
	})

	after(() => {
		service.close()
	})
})
