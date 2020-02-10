import { SocketBroadcaster, SocketOptions } from 'src/utils';
import { EmptyRequest } from '../types';

type AppSocketConfig = {
    broadcaster: SocketBroadcaster;
    options: SocketOptions;
};

export type AppConfig = {
    chatMaxMessageContentLength: number;
    socket: AppSocketConfig;
    userGenderMale: string;
    userGenderFemale: string;
    userMinAge: number;
    userMaxAge: number;
    userMinDistance: number;
    userMaxDistance: number;
    userMaxDescriptionLength: number;
    userMaxNameLength: number;
    userMaxPhotos: number;
}

export type AppConfigRequest = EmptyRequest;

export type AppConfigResponse = AppConfig;
