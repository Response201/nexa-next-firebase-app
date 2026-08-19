import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBZKoeh_2CdzpCGW7cV9C80TUiHjWFK8xE",
  authDomain: "nexa-6f8e0.firebaseapp.com",
  projectId: "nexa-6f8e0",
  storageBucket: "nexa-6f8e0.firebasestorage.app",
  messagingSenderId: "1076497233413",
  appId: "1:1076497233413:web:91d068be251bbf3a064e6c"
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

export default app;