const routes = [
	{
		path: '/',
		name: 'core',
		component: () => import('../layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'core-main',
				component: () => import('../pages/Main.vue'),
				children: [
					// Place the routes here
				],
			},
		],
	},
	{
		path: '/core-elements',
		name: 'core-elements',
		component: () => import('../pages/Elements.vue'),
	},
	{
		path: '/core-biometric',
		name: 'core-biometric',
		component: () => import("pages/Biometric/Biometric.vue"),
	},
	{
		path: '/core-adddevice',
		name: 'core-adddevice',
		component: () => import("pages/Biometric/DevicesPanel/AddDevice.vue"),
	},
	{
		path: '/core-register',
		name: 'core-register',
		component: () => import("pages/Biometric/DeviceDataPanel/Register.vue"),
	},
	{
		path: '/core-waiting',
		name: 'core-waiting',
		component: () => import("pages/Biometric/DeviceDataPanel/Waiting.vue"),
	},
	{
		path: '/core-oops',
		name: 'core-oops',
		component: () => import("pages/Biometric/DeviceDataPanel/Oops.vue"),
	},
	{
		path: '/core-choose-user',
		name: 'core-choose-user',
		component: () => import("pages/Biometric/DeviceDataPanel/ChooseUser.vue"),
	},	
	{
		path: '/core-fingerprint-done',
		name: 'core-fingerprint-done',
		component: () => import("pages/Biometric/DeviceDataPanel/FingerprintDone.vue"),
	},	
	{
		path: '/core-add-user-to-device',
		name: 'core-add-user-to-device',
		component: () => import("pages/Biometric/DeviceDataPanel/AddUsertoDevice.vue"),
	},
	{
		path: '/core-backup-device-data',
		name: 'core-backup-device-data',
		component: () => import("pages/Biometric/DeviceDataPanel/BackupDeviceData.vue"),
	},
	{
		path: '/core-backup-waiting',
		name: 'core-backup-waiting',
		component: () => import("pages/Biometric/DeviceDataPanel/BackupWaiting.vue"),
	},
	{
		path: '/core-backup-deviceSN',
		name: 'core-backup-deviceSN',
		component: () => import("pages/Biometric/DeviceDataPanel/BackupDeviceSN.vue"),
	},
	{
		path: '/core-facial-recognition',
		name: 'core-facial-recognition',
		component: () => import("pages/Biometric/DeviceDataPanel/FacialRecognition.vue"),
	},
	{
		path: '/core-biometrics-done',
		name: 'core-biometrics-done',
		component: () => import("pages/Biometric/DeviceDataPanel/BiometricsDone.vue"),
	},
];

routes.push({
	// Always leave this as last one,
	// but you can also remove it
	path: '/:catchAll(.*)*',
	component: () => import('pages/Error404.vue'),
});

export default routes;
