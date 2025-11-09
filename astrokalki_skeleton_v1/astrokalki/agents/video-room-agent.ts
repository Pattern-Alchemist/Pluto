export class VideoRoomAgent {
  createRoom(minutes = 30) {
    return `astro-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  }
}
