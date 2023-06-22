<template>
	<div class="width-300">
		<div class="full-width flex justify-center">
			<div class="core-border-radius-10 width-auto q-pa-sm">
				<img class="q-ml-lg" src="../../assets/check-circle-violet.png" />
				<q-icon class="core-text-accent-0" size="30px" />
			</div>
		</div>
		<h4 :class="`text-semibold text-28 q-my-none ${$q.screen.width < 768 ? 'q-mb-sm' : 'q-mb-xl'}`">
			Successful Backup
		</h4>
		<div class="full-width text-13">
			<label>Great! Data from device 1023-QWs</label>
		</div>
		<div class="full-width text-13">
			<label>has been backup.</label>
		</div>
		<div class="q-mt-sm">
			<q-btn
                @click="closeDialog()"
				flat
				no-caps
				label="Download (20mb)"
				dense
				:class="`core-bg-violet-4 full-width q-py-sm q-my-sm core-border-radius-${
					$q.screen.width < 768 ? '10' : '50'
				}`"
			/>
            <q-btn
                @click="closeDialog()"
				flat
				no-caps
				label="Done"
				dense
				:class="`core-bg-violet-4 full-width q-py-sm core-border-radius-${
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
