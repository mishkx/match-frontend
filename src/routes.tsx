import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
    PATH_INDEX,
    PATH_MATCHES,
    PATH_MATCHES_CHAT,
    PATH_MATCHES_USER,
    PATH_PROFILE,
    PATH_PROFILE_EDIT,
    PATH_PROFILE_PHOTOS,
    PATH_RECOMMENDATIONS,
} from 'src/constants';
import {
    MatchesChatsContainer,
    NotFoundContainer,
    ProfileContainer,
    RecommendationsContainer,
    SettingsContainer,
    SettingsPhotosContainer,
    SingleChatContainer,
    SingleMatchContainer,
} from 'src/containers';

const routes = (
    <Switch>
        <Route exact={true} path={PATH_MATCHES_USER()} component={SingleMatchContainer}/>
        <Route exact={true} path={PATH_MATCHES_CHAT()} component={SingleChatContainer}/>
        <Route exact={true} path={PATH_MATCHES} component={MatchesChatsContainer}/>
        <Route exact={true} path={PATH_RECOMMENDATIONS} component={RecommendationsContainer}/>
        <Route exact={true} path={PATH_PROFILE_EDIT} component={SettingsContainer}/>
        <Route exact={true} path={PATH_PROFILE_PHOTOS} component={SettingsPhotosContainer}/>
        <Route exact={true} path={PATH_PROFILE} component={ProfileContainer}/>
        <Redirect exact={true} from={PATH_INDEX} to={PATH_RECOMMENDATIONS}/>
        <Route component={NotFoundContainer}/>
    </Switch>
);

export default routes;
