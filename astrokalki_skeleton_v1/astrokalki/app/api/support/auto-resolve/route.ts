import { NextResponse } from 'next/server'
export const runtime = 'edge'
export async function GET() {
  // TODO: auto-resolve old tickets
  return NextResponse.json({ ok: true })
}
