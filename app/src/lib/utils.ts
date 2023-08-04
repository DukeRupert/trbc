import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import { toastStore } from '@skeletonlabs/skeleton';

// Drawer
interface Id {
	id: string;
}

export function drawerOpen(id: Id): void {
	const settings: DrawerSettings = id || { id: 'navigation' };
	drawerStore.open(settings);
}

export function drawerClose(): void {
	drawerStore.close();
}

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
