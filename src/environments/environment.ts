// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: "Los Pollos Hermanos",
  emailService: {
    serviceID: "service_acg4g0p",
    templateID: "template_m4gxh9q"
  },
  firebaseConfig : {
    apiKey: "AIzaSyDrNV-AZmTwq_HNuFYBKU62uVh--hZPPIE",
    authDomain: "pps-lacomanda.firebaseapp.com",
    projectId: "pps-lacomanda",
    storageBucket: "pps-lacomanda.appspot.com",
    messagingSenderId: "233815773210",
    appId: "1:233815773210:web:370be36feb556d822681a3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
