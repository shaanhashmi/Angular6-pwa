// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    facebookConfig: {
        appId: '303906227077436',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    },
    googleConfig: {
        client_id: "577059691357-u8meqdfccn80fhmdq006f27tp9ll3fr9.apps.googleusercontent.com",
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
    },
    linkedinConfig: {
        api_key: '78qr6vyq4s2h48',
        authorize: true,
    },
    twitterConfig: {
        api_key: 'zZKTL3MTYW9sTNWGXZeosKiGY',
        request_url: ''
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
