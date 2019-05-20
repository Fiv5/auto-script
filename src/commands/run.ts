import { Command, flags } from '@oclif/command'
import getConfig from '../utils/getConfig'
import parseConfig from '../utils/parseConfig'
import runConfig from '../utils/runConfig'
import defaultName from '../utils/defaultName'

export default class Run extends Command {
  static description = '读取 ' + defaultName + ' 并执行脚本'
  static examples = ['$ auto-script run']

  static flags = {
    help: flags.help({ char: 'h', description: '显示帮助信息' }),
    config: flags.string({
      char: 'c',
      description: '指定配置文件',
    }),
  }

  async run() {
    const { flags } = this.parse(Run)

    const { config } = flags
    try {
      const _config = getConfig(config)
      const isConfirm = await parseConfig(_config)
      isConfirm && runConfig(_config)
    } catch (e) {
      this.error(e)
    }
  }
}
