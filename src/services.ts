import { IncomingMessage } from 'http'
import parse from 'urlencoded-body-parser'

export const classify = async (req: IncomingMessage) => {
	const data = await parse(req)
	console.log(data)
}
