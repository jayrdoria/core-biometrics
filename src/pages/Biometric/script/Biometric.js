import { ref } from 'vue'

export default {
  setup () {
    let biometrics = ref([
      {
        label: "BIO-001",
        caption: "ZKTeco-MB160",
        icon: "tablet_android",
        system: "JuanHR",
        system_code: "ERP-021-576",
      },
      {
        label: "BIO-002",
        caption: "ZKTeco-MB160",
        icon: "desktop_windows",
        system: "Atlantis",
        system_code: "ERP-021-759",
      },
      {
        label: "BIO-003",
        caption: "ZKTeco-MB160",
        icon: "laptop_mac",
        system: "JuanHR",
        system_code: "ERP-021-091",
      },
      {
        label: "BIO-004",
        caption: "Generic-MB160",
        icon: "phone_iphone",
        system: "Atlantis",
        system_code: "ERP-021-775",
      },
      {
        label: "BIO-005",
        caption: "ZKTeco-MB160",
        icon: "tablet_android",
        system: "JuanHR",
        system_code: "ERP-021-576",
      },
    ])
    return {
      tab: ref('devices'),
      biometrics,
      register_text: "Register your device data for connection",
      backup_text: "Make sure all your important data is always synced and backup",
    }
  }
}