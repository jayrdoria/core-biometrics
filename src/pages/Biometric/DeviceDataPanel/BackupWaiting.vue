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
    
    <!-- Device Connection -->
    <div class="q-mt-xl">
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
    <div class="q-pa-lg q-my-sm">
          <!-- 1 -->
          <q-item>
            <q-item-section avatar>
              <q-avatar class="core-bg-accent-4">
                <q-icon name="done" class="core-text-violet-0" />
              </q-avatar>
            </q-item-section>
  
            <q-item-section>
              <q-item-label class="text-bold">BIO - 001</q-item-label>
              <q-item-label caption lines="2">ZKTeco-MB160</q-item-label>
            </q-item-section>
  
            <q-item-section side top>
              <q-item-label>JuanHR</q-item-label>
              <q-item-label caption lines="2">ERP-021-576</q-item-label>
            </q-item-section>
          </q-item>
    </div>

    <!-- Waiting Connection -->
    <div class="q-pa-xl q-mt-xs">
        <q-img src="../assets/waiting.png"/>
    </div>

    <!-- Save Device Button -->
    <div class="save-device q-mt-md">
        <q-btn
                  @click="openDialog()"
                  rounded
                  no-caps
                  label="Save Device"
                  class="core-border-violet-0 text-white text-12 core-bg-violet-2 q-px-xl q-py-sm q-ml-lg"
              />
        <MainDialog :content="$options.components.DialogBackupWaiting"/>
        </div>
</template>
<style lang="scss" scoped>
    @import '../style/Biometric.scss';
</style>
<script src="../script/BackupWaiting.js"></script>