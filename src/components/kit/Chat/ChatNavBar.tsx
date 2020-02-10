import React, { memo } from 'react';
import { ChatUserItem } from 'src/api/chat';
import { UserAvatar } from 'src/components/kit';
import { NavBar } from 'src/components/layout';
import { NavLink } from 'src/components/common';
import { PATH_MATCHES_USER } from 'src/constants';

type ChatNavBarProps = {
    user: ChatUserItem;
};

const ChatNavBar: React.FC<ChatNavBarProps> = ({ user }) => {
    const userPath = PATH_MATCHES_USER(user.id);
    const avatarHtml = (
        <NavLink to={userPath}>
            <UserAvatar userId={user.id} userName={user.name} photoSrc={user.photo?.thumb}/>
        </NavLink>
    );
    const titleHtml = (
        <NavLink to={userPath}>
            {user.name}
        </NavLink>
    );
    return (
        <NavBar rightContent={avatarHtml}>
            {titleHtml}
        </NavBar>
    );
};

export default memo(ChatNavBar);
