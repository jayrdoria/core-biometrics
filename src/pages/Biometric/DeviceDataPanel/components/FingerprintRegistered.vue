<template>
	<div class="width-300">
		<div class="full-width flex justify-center">
			<div class="core-border-radius-10 width-auto q-pa-sm">
				<img class="q-ml-lg" src="../../assets/check-circle-violet.png" />
				<q-icon class="core-text-accent-0" size="30px" />
			</div>
		</div>
		<h4 :class="`text-semibold text-28 q-my-none ${$q.screen.width < 768 ? 'q-mb-sm' : 'q-mb-xl'}`">
			Successful Register
		</h4>
		<div class="full-width text-13">
			<label>Great! Jose Rizal's fingerprint</label>
		</div>
		<div class="full-width text-13">
			<label>has been registered.</label>
		</div>
		<div class="q-mt-sm">
			<q-btn
				to="/core-facial-recognition"
                @click="closeDialog()"
				flat
				no-caps
				label="Done"
				dense
				:class="`core-bg-violet-4 full-width q-py-sm q-my-sm core-border-radius-${
					$q.screen.width < 768 ? '10' : '50'
				}`"
			/>
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
