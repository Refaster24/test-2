const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/e8J7qD7Ww1c:APA91bH2ydu5tTDSVKH9Gul9w6l-RQr0WNJR7TRz1mEQ11Tc1nhniB60MUt1xFTBBS7F4jpHHxYmePdoG2SAUOwV53a-gTr8tWTyeVoKIWZ8DzF7V0AAHOnBL3Eti8bQtPXijnpTw1te",
  expirationTime: null,
  keys: {
    p256dh: "BLc-LRAexFgBbSSc-T1uNQ22XjcgEKX0b35xnMh6z0E1ibSPFmr0f5OImnbEJKusC2nnasWpT33C6saivi1-t7k",
    auth: "_lPcGzkzqMPgos7ccghiGg",
  },
};


webpush.sendNotification(pushSubscription, 'Your Push Payload Text');