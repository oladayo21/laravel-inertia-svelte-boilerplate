import {AxiosInstance} from 'axios';
import {route as ziggyRoute} from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

/*
declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
*/
