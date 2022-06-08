#!/usr/bin/env node
const { program } = require("commander");
const pkg = require("../package.json");
const { dev } = require("../lib/dev");

program
  .version(pkg.version, "-v,-V", "输出当前框架版本")
  .description("类Umi框架，仅限于学习使用，请勿在生产环境使用")
  .usage("<command> [options]")
  .parse(process.argv);

program
  .command("help")
  .alias("-h")
  .description("帮助命令")
  .action(function (name, other) {
    console.log(`
  类Umi框架，仅限于学习使用，请勿在生产环境使用
  支持的指令:
  version,-v,-V 输出当前框架版本
  help,-h 输出帮助程序
  Example call:
    $ malita <command> --help
  `);
  });

console.log("Hello @wongchisum/malita");

dev();
