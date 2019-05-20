import path from 'path'
import fs from 'fs-extra'
import defaultName from './defaultName'

export default (file: any) => {
  const root = path.resolve()
  const cfgPath = path.join(root, file || defaultName)
  const config = fs.readJSONSync(cfgPath)
  return config
}
