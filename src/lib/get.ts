import { get as _get } from 'request'

export const get = async <T>(url: string) =>
	new Promise<T>((resolve, reject) => {
		_get(
			{
				url,
				json: true
			},
			(err, res) => {
				if (err) {
					return reject(err)
				}
				resolve(res.body)
			}
		)
	})
