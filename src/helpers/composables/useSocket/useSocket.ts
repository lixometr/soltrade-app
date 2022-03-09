import { io } from 'socket.io-client'
const socketUrl =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:85/public'
    : (import.meta.env.VITE_API_HOST as string)
const socket = io(socketUrl)
socket.on('connect', () => {
  console.log('connect')
  //   socket.emit('track-subscribe', ['magicticket', 'bohemia_', 'degods'])
})
socket.on('error', () => {
  console.log('error')
})

export default () => {
  const onConnect = (fn: (...args: any[]) => void) => {
    if (socket.connected) {
      fn()
    } else {
      socket.on('connect', fn)
    }
  }
  return {
    onConnect,
    socket,
  }
}
