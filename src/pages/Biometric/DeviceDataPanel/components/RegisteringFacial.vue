<template>
	<div class="width-300">
		<div class="full-width flex justify-center">
			<div class="core-border-radius-10 width-auto q-pa-sm">
				<img class="q-ml-lg" src="../../assets/connection-facial.png" />
				<q-icon class="core-text-accent-0" size="30px" />
			</div>
		</div>
		<h4 :class="`text-semibold text-28 q-my-none ${$q.screen.width < 768 ? 'q-mb-sm' : 'q-mb-xl'}`">
			Registering Facial
		</h4>
		<div class="full-width text-13">
			<label>Follow instructions indicated on the device.</label>
		</div>
		<div class="full-width text-13">
			<label>Do not disconnect device.</label>
		</div>
		<div class="q-mt-sm">
			<q-btn
				to="/core-biometrics-done"
				flat
				no-caps
				label="Add Connection"
				dense
				:class="`core-bg-violet-4 full-width q-py-sm q-my-sm core-border-radius-${
					$q.screen.width < 768 ? '10' : '50'
				}`"
			/>
			<div @click="closeDialog()" class="full-width q-py-sm cursor-pointer text-14">Cancel</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../style/Biometric.scss';
</style>

<script>
import { useStore } from 'vuex';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { ToggleMainDialogState } from '../../../../composables/Triggers';

export default {
	setup() {
		const $q = useQuasar();
		const store = useStore();
		let btnLoadingState = ref(false);
		const closeDialog = () => {
			ToggleMainDialogState();
		};
		return {
			btnLoadingState,
			closeDialog,
		};
	},
};
</script>
