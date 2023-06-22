<template>
  <div class="q-pt-lg">
    <!-- Biometrics -->
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="2000">
      <div class="core-biometric"></div>
    </transition>
    <div class="flex justifty-start items-center q-ml-md">
      <q-btn @click="$router.go(-1)" round dense flat icon="arrow_back" />
      <h5 class="text-26 text-semibold q-my-none q-ml-md">Biometrics</h5>
    </div> 
  </div>

  <!-- Tabs -->
  <div class="q-pa-xs">
    <div class="q-gutter-y-md">
      <q-tabs
        v-model="tab"
        indicator-color="deep-purple-13"
        active-color="deep-purple-13"
        no-caps
        class="core-text-accent-0"
      >
        <q-tab name="devices" label="DEVICES" />
        <q-tab name="device_data" label="DEVICE DATA" />
        <q-tab name="user_roles" label="USER ROLES" />
      </q-tabs>
    </div>
  </div>

  <!-- Tab Panels -->
  <q-tab-panels v-model="tab" animated>
    <!-- ----------Start of Devices Tab Panel---------- -->
    <q-tab-panel name="devices">
      <!-- Search -->
				<div class="q-pa-lg q-mb-xl">
					<q-input
						dense
						borderless
						left-icon="search"
						placeholder="search brands"
						:rules="[(val) => (val !== null && val !== '') || '']"
						hide-bottom-space
						class="core-input-field standard core-bg-accent-6 core-border-radius-10 q-pa-sm"
					>
						<template v-slot:append>
							<q-icon name="search" class="cursor-pointer core-text-violet-0" />
						</template>
					</q-input>
					<!-- Search Button -->
					<q-btn
						class="core-bg-violet-0 text-white full-width text-15 q-py-sm q-mt-sm"
						rounded
						flat
						no-caps
						dense
						label="Search"
					/>
          <!-- Q-Items -->
					<div class="q-my-lg">
						<div v-for="biometric in biometrics" :key="biometric">
							<q-separator class="q-my-md" />

							<!-- 1 -->
							<q-item>
								<q-item-section avatar>
									<q-avatar class="core-bg-accent-4">
										<q-icon :name="biometric.icon" class="core-text-violet-0" />
									</q-avatar>
								</q-item-section>

								<q-item-section>
									<q-item-label class="text-bold">{{ biometric.label }}</q-item-label>
									<q-item-label caption lines="2">{{ biometric.caption }}</q-item-label>
								</q-item-section>

								<q-item-section side top>
									<q-item-label>{{ biometric.system }}</q-item-label>
									<q-item-label caption lines="2">{{ biometric.system_code }}</q-item-label>
								</q-item-section>
							</q-item>
						</div>
					</div>
        </div>
        <!-- Remove Selected Button -->
        <div class="absolute-bottom-left text-center q-ma-xl q-pt-xl">
          <q-btn
            rounded
            dense
            flat
            no-caps
            label="Remove Selected"
            class="core-border-violet-0 text-white text-12 core-bg-violet-0 q-px-md q-py-sm"
          />
        </div>

        <!-- Add Device Button -->
        <div class="absolute-bottom-right text-center q-ma-xl q-pt-xl">
          <q-btn
            to="/core-adddevice"
            rounded
            dense
            flat
            no-caps
            label="Add Device"
            class="core-border-violet-0 text-white text-12 core-bg-violet-0 q-px-lg q-py-sm"
          />
        </div>
    </q-tab-panel>
    <!-- ----------End of Devices Tab Panel---------- -->

    <!-- ----------Start of Device Data Tab Panel---------- -->
    <q-tab-panel name="device_data">
      <!-- Register Device Data -->
      <div class="q-pa-md">
      <q-card class="core-border-radius-10 register-card">
        <q-card-section horizontal>
          <q-icon
            name="description"
            size="xl"
            color="white"
            class="core-border-radius-10 description-icon"
          />
          <q-card-section>
            <q-item-label class="text-26 text-bold q-mt-lg q-mb-md">Register Device Data</q-item-label>
            <q-item-label class="text-14 q-pa-sm q-mb-md">{{register_text}}</q-item-label>
            <q-btn
              to="/core-register"
              rounded
              no-caps
              label="Register"
              class="core-border-violet-0 text-white text-12 core-bg-violet-2 q-px-xl q-py-sm q-ml-lg"
          />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <!-- Backup Device Data -->
    <div class="q-pa-md">
      <q-card class="core-border-radius-10 register-card">
        <q-card-section horizontal>
          <q-icon
            name="cloud_download"
            size="xl"
            color="white"
            class="core-border-radius-10 description-icon"
          />
          <q-card-section>
            <q-item-label class="text-26 text-bold q-mt-lg q-mb-md">Backup Device Data</q-item-label>
            <q-item-label class="text-14 q-pa-sm q-mb-md">{{backup_text}}</q-item-label>
            <q-btn
              rounded
              no-caps
              label="Backup"
              class="core-border-violet-0 text-white text-12 core-bg-violet-2 q-px-xl q-py-sm q-ml-lg"
          />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    </q-tab-panel>
    <!-- ----------End of Device Data Tab Panel---------- -->

    <!-- ----------Start of User Roles Tab Panel---------- -->
    <q-tab-panel name="user_roles">
      <!-- Search -->
				<div class="q-pa-lg q-mb-xl">
					<q-input
						dense
						borderless
						left-icon="search"
						placeholder="search brands"
						:rules="[(val) => (val !== null && val !== '') || '']"
						hide-bottom-space
						class="core-input-field standard core-bg-accent-6 core-border-radius-10"
					>
						<template v-slot:append>
							<q-icon name="search" class="cursor-pointer core-text-violet-0" />
						</template>
					</q-input>
					<!-- Search Button -->
					<q-btn
						class="core-bg-violet-0 text-white full-width text-15 core-border-radius-10 q-py-sm q-mt-sm"
						rounded
						flat
						no-caps
						dense
						label="Search"
					/>
          <!-- Q-Items -->
					<div class="q-my-lg">
						<div v-for="biometric in biometrics" :key="biometric">
							<q-separator class="q-my-md" />

							<!-- 1 -->
							<q-item>
								<q-item-section avatar>
									<q-avatar class="core-bg-accent-4">
										<q-icon :name="biometric.icon" class="core-text-violet-0" />
									</q-avatar>
								</q-item-section>

								<q-item-section>
									<q-item-label class="text-bold">{{ biometric.label }}</q-item-label>
									<q-item-label caption lines="2">{{ biometric.caption }}</q-item-label>
								</q-item-section>

								<q-item-section side top>
									<q-item-label>{{ biometric.system }}</q-item-label>
									<q-item-label caption lines="2">{{ biometric.system_code }}</q-item-label>
								</q-item-section>
							</q-item>
						</div>
					</div>
        </div>

        <!-- Add Device Button -->
        <div class="absolute-bottom text-center q-ma-xl">
          <q-btn
                to="/core-adddevice"
                rounded
                dense
                flat
                no-caps
                label="Add Device"
                class="core-border-violet-0 text-white core-bg-violet-0 q-px-xl"
              />
        </div>
    </q-tab-panel>
  </q-tab-panels>
    <!-- ----------End of User Roles Tab Panel---------- -->

</template>
<style lang="scss" scoped>
 @import './style/Biometric.scss';
</style>
<script src="./script/Biometric.js">
</script>
