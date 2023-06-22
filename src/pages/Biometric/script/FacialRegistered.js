import { ref } from 'vue'
import MainDialog from 'src/components/MainDialog.vue'
import { ToggleMainDialogState } from "../../../composables/Triggers";
import FacialRegistered from "../../Biometric/DeviceDataPanel/components/FacialRegistered.vue"

export default {
    components: { MainDialog, FacialRegistered },
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