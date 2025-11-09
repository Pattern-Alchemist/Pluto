# AstroKalki Scaffold (Next.js 14 App Router)

This is a clean, production-lean scaffold for the AstroKalki platform with
API stubs, CI, voice/video hooks, and Prisma ready to connect.

## Quickstart
```bash
npm ci
npm run db:push && npx prisma generate
npm run dev & npm run agent:watch
```

## Deploy
- Connect to Vercel, set env vars, push main
- Or: `npm run agent:deploy` (Vercel CLI)
