import { ref } from 'vue'
import MainDialog from 'src/components/MainDialog.vue'
import { ToggleMainDialogState } from "../../../composables/Triggers";
import RegisteringFacial from "../../Biometric/DeviceDataPanel/components/RegisteringFacial.vue"

export default {
    components: { MainDialog, RegisteringFacial },
    setup(){
        const openDialog = () => {
            ToggleMainDialogState();
        }
        const dialog = ref(false)
        const position = ref('top')
		return {
            openDialog,
            dialog,
            position,
            open (pos) {
                position.value = pos
                dialog.value = true
              }
        };
	},
};