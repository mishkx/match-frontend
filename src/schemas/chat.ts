import { schema } from 'normalizr';
import { ChatItem } from 'src/api/chat';

export default new schema.Entity('items', {
    messages: [new schema.Entity('messages')],
}, {
    idAttribute: (value: ChatItem) => value.user.id.toString(),
});
