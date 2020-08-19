require('dotenv').config() // 加载环境变量
const cp = require('child_process')
const cwd = process.cwd()
const path = require('path')
console.log('构建NPM...');
console.log('CWD: ', cwd);
let CLI_PATH = ''
if (process.platform === 'darwin') {
  CLI_PATH = process.env.CLI_PATH_MAC
} else if (process.platform === 'win32') {
  CLI_PATH = `${path.resolve(process.env.CLI_PATH_PC, 'node.exe')} ${path.resolve(process.env.CLI_PATH_PC, 'cli.js')}`
} else {
  console.error('暂时不支持该平台：', process.platform);
  process.exit(0)
}
console.log('CLI_PATH', CLI_PATH)
cp.exec(`${CLI_PATH} build-npm --project ${cwd}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    console.error('构建失败')
    process.exit(1)
  } else {
    console.log('构建成功')
  }
})
