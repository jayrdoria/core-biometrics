import { ref } from 'vue'

export default {
    setup(){
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
          ])
        const dialog = ref(false)
        const position = ref('top')
		return {
            dialog,
            position,
            biometrics,
            open (pos) {
                position.value = pos
                dialog.value = true
              }
        };
	},
};