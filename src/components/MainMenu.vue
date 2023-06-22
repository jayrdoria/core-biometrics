<template>
	<!-- START OF MENU TABLE -->
	<div class="main-menu q-mt-md">
		<div class="core-menu-scroll">
			<q-list>
				<!-- USER -->
				<q-item clickable v-ripple :to="{ name: 'core-user-management' }">
					<q-item-section avatar class="margin-left-10">
						<q-icon name="iconfont icon-user-management-fill" class="list-icon" />
					</q-item-section>
					<q-item-section class="list-text core-text-primary">User Management</q-item-section>
				</q-item>
			</q-list>
			<div class="absolute-bottom">
				<q-list>
					<q-item class="logout-item" clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="logout" class="list-icon" />
						</q-item-section>
						<q-item-section class="list-text core-text-primary">Logout</q-item-section>
					</q-item>
				</q-list>
			</div>
		</div>
	</div>

	<!-- END OF MENU -->
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
//IMPORTING SCSS STYLE
@import '../css/components/MainMenu.scss';
</style>
