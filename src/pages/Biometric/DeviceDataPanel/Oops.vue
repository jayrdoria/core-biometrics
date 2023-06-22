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
    <div class="q-mt-lg q-ml-md">
        <q-item>
          <q-item-section>
            <q-item-label class="text-26 text-bold">Device Connection</q-item-label>
          </q-item-section>
        </q-item>
    </div>

    <!-- Oops -->
    <div class="q-pa-xl q-mt-xl">
        <q-img src="../assets/oops.png"/>
    </div>


</template>
<style lang="scss" scoped>
    @import '../style/Biometric.scss';
   </style>
   <script src="../script/Biometric.js">
   </script>