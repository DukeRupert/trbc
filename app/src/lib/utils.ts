import { Toast, getToastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

// Toast
// const tSuccess: ToastSettings = {
// 	message: 'Message sent!',
// 	background: 'variant-filled-success'
// };

export const trigger_success_toast = (message: string) => {
	const tSuccess: ToastSettings = {
		message: message ?? 'Message sent!',
		background: 'variant-filled-success'
	};
	toastStore.trigger(tSuccess);
};

const tError: ToastSettings = {
	message: 'An error has occured. Please try again later.',
	background: 'variant-filled-error'
};

export const trigger_error_toast = () => {
	toastStore.trigger(tError);
};
