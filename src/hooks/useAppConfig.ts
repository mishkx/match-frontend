import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppConfig } from 'src/actions';
import { AppConfig } from 'src/api';
import { selectAppConfigState } from 'src/selectors';

type Hook = () => AppConfig | undefined;

const useAppConfig: Hook = () => {
    const configState = useSelector(selectAppConfigState);
    const dispatch = useDispatch();
    const configIsLoaded = configState.isLoaded && !configState.isFetching;

    useEffect(() => {
        if (!configIsLoaded) {
            dispatch(getAppConfig.request());
        }
    }, [dispatch, configIsLoaded]);

    return configIsLoaded ? configState.data : undefined;
};

export default useAppConfig;
