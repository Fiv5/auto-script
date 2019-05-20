import chalk from 'chalk'
import spawn from 'cross-spawn'
import { Task, Config } from '../typings'

const { white, yellow, green } = chalk

export default (config: Config) => {
  Object.keys(config).forEach((task, taskIndex) => {
    const _task: Task = config[task]
    const { path } = _task
    console.log(yellow(`\n${task} start ... \n`))
    _task.shell.forEach((shell, shellIndex) => {
      console.log(white(`running command ${shellIndex + 1} : ${shell} ... `))
      spawn.sync(shell, { shell: true, cwd: path, stdio: 'ignore' })
      console.log(green(`command ${shellIndex + 1} done.✨\n`))
    })
  })
}
