#!/usr/bin/env node
const cmd = process.argv[2] || 'help'
const log = console.log
switch (cmd) {
  case 'build': log('running build (stub)'); break
  case 'deploy': log('deploying (stub)'); break
  case 'watch': log('watching files (stub)'); break
  default: log('Usage: node scripts/automation.js [build|deploy|watch]')
}
