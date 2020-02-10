import Echo from 'laravel-echo';
import { Channel as EchoChannel } from 'laravel-echo/dist/channel';
import Pusher from 'pusher-js';
import { userChannel } from './channels';
import { SocketBroadcaster, SocketOptions } from './types';

window.Pusher = Pusher;

class Socket {
    private readonly echo: Echo;
    private userId: number | null;

    constructor(private broadcaster: SocketBroadcaster, private options: SocketOptions) {
        this.echo = new Echo({
            broadcaster,
            ...options,
        });
        this.userId = null;
    }

    public joinUserChannel(userId: number): EchoChannel {
        this.leaveUserChannel();
        const channel = this.echo.private(userChannel(userId));
        this.userId = userId;

        return channel;
    }

    public leaveUserChannel(): void {
        if (this.userId !== null) {
            this.echo.leave(userChannel(this.userId));
            this.userId = null;
        }
    }
}

export default Socket;
