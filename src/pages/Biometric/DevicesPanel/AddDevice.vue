<template>
	<div class="q-py-lg">
		<!-- Add Device -->
		<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="2000">
			<div class="core-biometric"></div>
		</transition>
		<div class="flex justifty-start items-center q-ml-md">
			<q-btn @click="$router.go(-1)" round dense flat icon="arrow_back" />
			<h5 class="text-26 text-semibold q-my-none q-ml-md">Add Device</h5>
		</div>
        
        <!-- Inputs -->
        <div class="q-pa-lg">
            <p class="core-text-accent-1 text-20 text-semibold q-my-sm">Device Name</p>
            <q-input
				dense
				borderless
				placeholder="   Name"
				:rules="[(val) => (val !== null && val !== '') || '']"
				hide-bottom-space
                class="core-border-violet-5 core-border-radius-10 q-pa-sm text-20 text-semibold"
			/>

            <p class="core-text-accent-1 text-20 text-semibold q-my-sm">Serial Number</p>
            <q-input
				dense
				borderless
				placeholder="   Serial Number"
				:rules="[(val) => (val !== null && val !== '') || '']"
				hide-bottom-space
                class="text-20 text-semibold core-border-violet-5 core-border-radius-10 q-pa-sm"
			/>

            <p class="core-text-accent-1 text-20 text-semibold q-my-sm">Brand</p>
            <q-input
				dense
				borderless
				placeholder="   Brand Name"
				:rules="[(val) => (val !== null && val !== '') || '']"
				hide-bottom-space
                class="text-20 text-semibold core-border-violet-5 core-border-radius-10 q-pa-sm"
			/>

            <p class="core-text-accent-1 text-20 text-semibold q-my-sm">Model Name</p>
            <q-input
				dense
				borderless
				placeholder="   Model Name"
				:rules="[(val) => (val !== null && val !== '') || '']"
				hide-bottom-space
                class="text-20 text-semibold core-border-violet-5 core-border-radius-10 q-pa-sm"
			/>

            <p class="core-text-accent-1 text-20 text-semibold q-my-sm">IP Address</p>
            <q-input
				dense
				borderless
				placeholder="   000.000.000.000"
				:rules="[(val) => (val !== null && val !== '') || '']"
				hide-bottom-space
                class="text-20 text-semibold core-border-violet-5 core-border-radius-10 q-pa-sm"
			/>
        </div>

        <!-- Q-Uploader Choose Files Here -->
		<div class="q-pt-none q-pl-lg">
			<q-uploader
			class="my-uploader"
			label="Choose Files Here"
			color="deep-purple-12"
			flat
			bordered
		/>
		</div>

		<!-- Save Device Button -->
		<div class="q-pt-lg q-pl-xl q-pr-xl">
		<q-btn
              class="core-bg-violet-0 text-white full-width text-15 q-py-sm q-mt-sm core-border-radius-10"
              flat
              no-caps
              dense
              label="Save Device"
          />
		</div>
	
    </div>
</template>
<style lang="scss" scoped>
@import '../style/Biometric.scss';
</style>
<script src="../script/Biometric.js"></script>
