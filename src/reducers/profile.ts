import { ProfileState } from './types';
import { info } from '../actions/profile';

export const initialState: ProfileState = {
    isFetching: false,
};

type ActionType = typeof info.success.action & typeof info.error.action;

export default (state: Readonly<ProfileState> = initialState, action: ActionType): ProfileState => {
    switch (action.type) {
        case info.request.type:
            return {
                ...state,
                error: undefined,
                isFetching: true,
            };

        case info.success.type:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
            };

        case info.error.type:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
    }

    return state;
};
