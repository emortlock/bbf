import { createHash } from 'crypto'
import { readFileSync } from 'fs'

export default (filePath) => {
  let version = ''

  if (process.env.NODE_ENV === 'production') {
    const hash = createHash('sha256')
    hash.update(readFileSync(`${process.cwd()}/.next/${filePath}`))
    version = `?v=${hash.digest('hex').substr(0, 8)}`
  }

  return version
}
