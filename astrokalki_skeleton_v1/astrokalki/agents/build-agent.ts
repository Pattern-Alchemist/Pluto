// Build agent stub (use chokidar + child_process in a real setup)
export class BuildAgent {
  watch() { console.log('watching...') }
  async build() { console.log('lint -> tsc -> next build (stub)') }
  async deploy() { console.log('vercel --prod (stub)') }
}
