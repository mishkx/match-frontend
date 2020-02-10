export type SocketBroadcaster = 'socket.io' | 'pusher' | null;
export type SocketOptions = {
    authEndpoint?: string;
    cluster?: string;
    forceTLS?: boolean;
    host?: string;
    key?: string;
};
