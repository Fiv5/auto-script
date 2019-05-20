# auto-script

A simple script to reduce duplicate work.

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g auto-script
$ auto-script COMMAND
running command...
$ auto-script (-v|--version|version)
auto-script/0.0.0 darwin-x64 node-v11.10.0
$ auto-script --help [COMMAND]
USAGE
  $ auto-script COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`auto-script help [COMMAND]`](#auto-script-help-command)
- [`auto-script run`](#auto-script-run)

## `auto-script help [COMMAND]`

display help for auto-script

```
USAGE
  $ auto-script help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `auto-script run`

读取 autoscript.config.json 并执行脚本

```
USAGE
  $ auto-script run

OPTIONS
  -c, --config=config  指定配置文件
  -h, --help           显示帮助信息

EXAMPLE
  $ auto-script run
```

_See code: [src/commands/run.ts](https://github.com/work/auto-script/blob/v0.0.0/src/commands/run.ts)_

<!-- commandsstop -->

# configuration

## example

```json
{
  "web-portal": {
    "path": "/Users/wuzheqing/Documents/work/web-portal",
    "shell": [
      "npm run updateAll",
      "git add .",
      "git commit -m 'update'",
      "git push origin",
      "git push dice master_zoina_6:develop"
    ]
  },
  ...
}
```

每个 Task 以名字作 key, 并且会有两个属性: path 、shell

### path (string)

要执行脚本的绝对路径

### shell (string[])

要执行的脚本, 同步执行, 脚本之间没有上下环境切换

bad:

```json
{
  "task": {
    "path": "/User/path/dir",
    "shell": ["mkdir example", "cd ./example", "touce test.js"]
  }
}
```

good:

```json
{
  "task": {
    "path": "/User/path/dir",
    "shell": ["mkdir example", "cd ./example && touce test.js"]
  }
}
```
