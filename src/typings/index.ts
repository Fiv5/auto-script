export interface Task {
  description?: string
  path: string
  shell: string[]
}

export interface Config {
  [taskName: string]: Task
}
