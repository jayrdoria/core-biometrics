<template>
    <div class="q-pt-lg">
		<!-- Add User to Device -->
		<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="2000">
			<div class="core-biometric"></div>
		</transition>
		<div class="flex justifty-start items-center q-ml-md">
			<q-btn @click="$router.go(-1)" round dense flat icon="arrow_back" />
			<h5 class="text-26 text-semibold q-my-none q-ml-md">Add User to Device</h5>
		</div>
	</div>

    <!-- Select a User -->
    <div class="q-pa-lg q-mt-lg core-text-violet-4">
		<p class="core-text-accent-1 text-20 text-semibold q-my-sm">Select a User</p>
		<q-btn
			v-if="chooseuser"
			@click="open('bottom')"
			dense
			no-caps
			label="Nems Kun"
			class="button-register core-border-violet-5 core-border-radius-10 q-pa-sm q-mx-lg"
		/>
		<q-btn
			v-else
			@click="open('bottom')"
			dense
			no-caps
			label="Choose a User"
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
							@click="chooseuser = !chooseuser"
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

    <!-- Select a device -->
    <div class="q-pa-lg core-text-violet-4 padtopnegamd">
		<p class="core-text-accent-1 text-20 text-semibold q-my-sm">Select a Device</p>
    </div>

    <!--Bio devices -->
    <div class="q-pa-lg q-mt-sm padtopnegamd">
        <div v-for="biometric in biometrics" :key="biometric">
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
          <q-separator class="q-my-md" />
        </div>
      </div>

      <!-- Select Roles that Apply -->
      <div class="q-pa-lg core-text-violet-4 padtopnegalg">
		<p class="core-text-accent-1 text-20 text-semibold q-my-sm">Select Roles that Apply</p>
      </div>

      <!-- Buttons -->
      <div class="q-pa-lg padtopnegalg q-ml-sm">
        <span>
            <q-btn
                dense
                flat
                no-caps
                label="Superadmin"
                class="core-border-violet-0 core-text-violet-5 tri-button core-bg-hover-violet-4"
              /> 
              <q-btn
                dense
                flat
                no-caps
                label="Registrar"
                class="core-border-violet-0 core-text-violet-5 tri-button core-bg-hover-violet-4"
              /> 
              <q-btn
                dense
                flat
                no-caps
                label="DTR Downloader"
                class="core-border-violet-0 core-text-violet-5 tri-button core-bg-hover-violet-4"
              /> 
        </span>
      </div>

      <!-- Save Device Button -->
      <div class="text-center">
        <q-btn
              rounded
              dense
              flat
              no-caps
              label="Add Device"
              class="core-border-violet-0 text-white core-bg-violet-4 q-px-xl q-mt-sm"
            />
      </div>

</template>
<style lang="scss" scoped>
    @import '../style/Biometric.scss';
    </style>
<script src="../script/AddUsertoDevice.js"></script>