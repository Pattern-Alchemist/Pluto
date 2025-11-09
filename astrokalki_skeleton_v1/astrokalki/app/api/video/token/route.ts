import { NextResponse } from 'next/server'
export const runtime = 'edge'
export async function POST() {
  // TODO: sign LiveKit AccessToken
  return NextResponse.json({ token: 'stub-token' })
}
