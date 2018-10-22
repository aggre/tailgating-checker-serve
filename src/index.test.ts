import * as assert from 'assert'
// tslint:disable-next-line:no-require-imports
import listen = require('test-listen')
import { service } from './service'
import { post } from 'request'
import { createReadStream } from 'fs'

let host: string

describe('Serve', () => {
	before(async () => {
		host = await listen(service)
	})

	it('[POST] /classify', async () => {
		const result = await new Promise<ResponseClassify>(res => {
			const url = `${host}/classify`
			const formData = {
				img: createReadStream(`${__dirname}/asset/demo.jpg`),
				speed: 100
			}
			post(
				{
					url,
					formData
				},
				(_, __, body) => {
					res(body)
				}
			)
		})
		const expected: ResponseClassify = {
			filename: 'demo.jpg',
			result: {
				safe: 23,
				caution: 87
			}
		}
		assert.deepStrictEqual(result, expected)
	})

	after(() => {
		service.close()
	})
})
