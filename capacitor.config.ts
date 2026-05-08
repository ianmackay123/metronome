import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.metronome.speedtrainer',
  appName: 'Speed Trainer',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#1a1a2e',
    },
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#1a1a2e',
    },
  },
};

export default config;
