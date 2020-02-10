import { Selector, createSelector } from 'reselect';
import { initialState } from 'src/reducers/config';
import { AppConfigState, AppState } from 'src/reducers/types';
import { AppConfig } from 'src/api';

export const appConfigStateSelector: Selector<AppState, AppConfigState> = (state) => state.config || initialState;

export const selectAppConfigState = createSelector<AppState, AppConfigState, AppConfigState>(
    appConfigStateSelector,
    (state) => state,
);

export const selectAppConfig = createSelector<AppState, AppConfigState, AppConfig>(
    selectAppConfigState,
    (state) => state.data,
);
