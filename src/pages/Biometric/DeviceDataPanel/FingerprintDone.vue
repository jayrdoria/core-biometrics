<template>
	<div class="q-pt-lg">
		<!-- Register User Data -->
		<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="2000">
			<div class="core-biometric"></div>
		</transition>
		<div class="flex justifty-start items-center q-ml-md">
			<q-btn @click="$router.go(-1)" round dense flat icon="arrow_back" />
			<h5 class="text-26 text-semibold q-my-none q-ml-md">Register User Data</h5>
		</div>
	</div>
	<q-separator class="q-mt-lg core-bg-violet-4" />

	<!-- Device Connection -->
	<div class="q-mt-lg q-ml-md">
		<q-item>
			<q-item-section>
				<q-item-label class="text-26 text-bold">Device Connection</q-item-label>
			</q-item-section>
		</q-item>
	</div>

	<!-- Device SN -->
	<div class="oopslogo">
		<q-img src="../assets/oopslogo.png" />
		<div class="text-20 text-semibold q-ml-md">
			<span class="core-text-violet-5">Device SN:</span>
			<span>1uh32i1d</span>
		</div>
	</div>

	<!-- User To Register -->
	<div class="q-pa-lg core-text-violet-4">
		<p class="core-text-accent-1 text-20 text-semibold q-my-sm">User to Register</p>
		<q-btn
			@click="open('bottom')"
			dense
			no-caps
			label="Nems Kun"
			class="button-register core-border-violet-5 core-border-radius-10 q-pa-sm q-mx-lg"
		/>
		<q-dialog v-model="dialog" :position="position">
			<q-card class="q-dialog-choose-user core-border-radius-10">
				<q-card-section>
					<div>
						<p class="text-22 text-semibold q-my-sm q-ml-sm">Select a user to register</p>
					</div>

					<!-- Buttons First Line -->
					<div class="q-gutter-xs q-mt-lg q-ml-sm">
						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>
					</div>

					<!-- Buttons Second Line -->
					<div class="q-gutter-xs q-mt-lg q-ml-sm">
						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>

						<q-btn stack dense flat class="core-bg-hover-violet-5">
							<img src="../assets/photo.png" />
							<q-btn stack no-caps dense flat label="Nems Kun"/>
						</q-btn>
					</div>

					<!-- Choose -->
					<div>
						<q-btn
							no-caps
							dense
							flat
							label="Choose"
							class="core-text-violet-3 q-pa-sm q-mt-lg choose-button"
						/>
					</div>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>

	<!-- Biometrics -->
	<div class="q-ml-xs q-px-lg q-gutter-sm core-text-violet-4">
		<p class="core-text-accent-1 text-20 text-semibold q-my-sm">Biometrics</p>
		<q-btn
			@click="openDialog()"
			stack
			no-caps
			dense
			icon="fingerprint"
			class="button-fingerprint core-border-radius-10 core-bg-violet-0 text-white"
		>
        <div class="flex items-center justify-between">
            <span>Fingerprint</span>
            <img src="../assets/check-circle.png" class="ml-2 q-ml-xs">
        </div>
        </q-btn>
		<q-btn
			stack
			no-caps
			dense
			icon="face"
			label="Facial Recognition"
			class="button-fingerprint core-border-radius-10 core-border-violet-5"
		/>
		<MainDialog :content="$options.components.FingerprintRegistered"/>
	</div>
</template>
<style lang="scss" scoped>
@import '../style/Biometric.scss';
</style>
<script src="../script/FingerprintRegistered.js"></script>

