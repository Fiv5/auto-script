import chalk from 'chalk'
import inquirer from 'inquirer'
import { Task, Config } from '../typings'

const { bgCyan, cyan } = chalk
export default async (config: Config) => {
  let message = '请确认执行下列脚本：\n'
  Object.keys(config).forEach((task, taskIndex) => {
    message += `\n ${bgCyan(`Task ${taskIndex + 1}: ${task}`)} \n`
    const _task: Task = config[task]
    _task.shell.forEach((shell, shellIndex) => {
      message += `\n ${cyan(`Command ${shellIndex + 1}: ${shell}`)} \n`
    })
  })
  const answer: any = await inquirer.prompt([{ type: 'confirm', name: 'isConfirm', message }])
  return answer.isConfirm
}
