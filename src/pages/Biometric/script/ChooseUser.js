import { ref } from 'vue'
import MainDialog from 'src/components/MainDialog.vue'
import { ToggleMainDialogState } from "../../../composables/Triggers";
import RegisteringFingerprint from "../../Biometric/DeviceDataPanel/components/RegisteringFingerprint.vue"
import RegisteringFacial from "../../Biometric/DeviceDataPanel/components/RegisteringFacial.vue"

export default {
    components: { MainDialog, RegisteringFingerprint, RegisteringFacial },
    setup(){
        const openDialog = () => {
            ToggleMainDialogState();
        }
        const openDialog2 = () => {
            ToggleMainDialogState();
        }
        const dialog = ref(false)
        const position = ref('top')
		return {
            openDialog,
            openDialog2,
            dialog,
            position,
            open (pos) {
                position.value = pos
                dialog.value = true
              }
        };
	},
};