import {
    ActionCreator,
    ActionObject,
    ActionPayload,
    ActionType,
    CreateRequestTypes,
    RequestTypes,
} from './types';

export class Action<T = ActionPayload> implements ActionCreator {
    constructor(protected _type: ActionType, protected _payload?: T) {}
    get type(): ActionType {
        return this._type;
    }
    get payload(): T | undefined {
        return this._payload;
    }
    setPayload(payload: T): this {
        this._payload = payload;
        return this;
    }
    get action(): ActionObject<T> {
        return {
            type: this.type,
            payload: this.payload,
        };
    }
}

export const createRequestTypes: CreateRequestTypes = (base: string): Record<RequestTypes, ActionType> => {
    return {
        [RequestTypes.REQUEST]: `${base}_${RequestTypes.REQUEST}`,
        [RequestTypes.SUCCESS]: `${base}_${RequestTypes.SUCCESS}`,
        [RequestTypes.ERROR]: `${base}_${RequestTypes.ERROR}`,
    };
};
