import { NextResponse } from 'next/server'
export const runtime = 'edge'
export async function POST() {
  // TODO: stream AI support reply
  return NextResponse.json({ message: 'Kalki AI (stub) says hello.' })
}
