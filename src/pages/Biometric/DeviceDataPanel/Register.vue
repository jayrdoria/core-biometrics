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
    <q-separator class="q-mt-lg core-bg-violet-4"/>

    <!-- Device Connection -->
    <div class="q-mt-md">
      <q-item>
        <q-item-section>
            <q-icon 
            name="lan"
            size="xl"
            color="white"
            class="core-border-radius-10 lan-icon"/>
        </q-item-section>
        <q-item-section class="device-connection">
          <q-item-label class="text-26 text-bold">Device Connection</q-item-label>
          <q-item-label class="text-14">Choose a device or select all to backup.</q-item-label>
        </q-item-section>
      </q-item>
    </div>

    <!-- Devices -->
    <div class="q-pa-lg q-mt-sm">
      <div v-for="biometric in biometrics" :key="biometric">

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
        <q-separator class="q-my-md" />
      </div>
    </div>
    <!-- Save Device Button -->
    <div class="save-device">
    <q-btn
              to="/core-waiting"
              rounded
              no-caps
              label="Save Device"
              class="core-border-violet-0 text-white text-12 core-bg-violet-2 q-px-xl q-py-sm q-ml-lg"
          />
    </div>
</template>
<style lang="scss" scoped>
    @import '../style/Biometric.scss';
   </style>
   <script src="../script/Biometric.js">
   </script>