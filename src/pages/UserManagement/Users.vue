<template>
	<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="2000">
		<div class="core-text-primary">
			<div v-if="!pageLoadingState">
				<div class="q-px-lg q-pt-lg gt-xs">
					<div class="flex justify-between q-mt-sm q-mb-lg">
						<h5 class="text-26 text-semibold q-my-none">Users</h5>
						<q-btn
							rounded
							dense
							flat
							no-caps
							to="core-add-user"
							label="Add User"
							class="core-border-violet-0 core-bg-hover-violet-0 q-px-xl"
						/>
					</div>

					<!-- Filter and Pagination -->
					<div class="flex justify-between q-mb-md gt-xs">
						<div>
							<Filters :searchVisible="true" :pathEndPoint="'userManagement'" />
						</div>
						<div class="flex items-center">
							<div
								class="text-14 core-text-accent-1 q-mr-md"
								:class="$q.screen.width < 769 && 'hidden'"
							></div>
							<Pagination v-model:pagination="pagination" :numRows="userList" />
						</div>
					</div>
				</div>

				<!-- Table for desktop and tablet view -->
				<div class="core-main-scroll table-scroll">
					<q-table
						:rows="userList"
						:columns="columns"
						v-model:pagination="pagination"
						row-key="work_type"
						class="core-table gt-xs"
						flat
					>
						<template v-slot:body-cell-role="props">
							<q-td :props="props">
								{{ userRole[props.row.role] }}
							</q-td>
						</template>
						<template v-slot:body-cell-action="props">
							<q-td :props="props">
								<div class="table-menu">
									<q-btn
										icon="more_vert"
										class="core-text-primary core-text-hover-accent-1"
										flat
										round
										dense
									/>
									<q-menu class="menu-container" style="width: 16%; padding: 5px">
										<q-list>
											<q-item
												clickable
												v-close-popup
												class="menu-list"
												@click="
													router.push({
														name: 'add-user',
														params: { id: props.row.id },
													})
												"
											>
												<q-item-section> Edit User </q-item-section>
											</q-item>
											<q-item
												clickable
												v-close-popup
												class="menu-list"
												@click="deleteUser(props.row)"
											>
												<q-item-section> Delete User </q-item-section>
											</q-item>
										</q-list>
									</q-menu>
								</div>
							</q-td>
						</template>
						<template v-if="!userList.length" v-slot:bottom-row>
							<q-tr>
								<q-td colspan="100%" class="text-center"> No results found! </q-td>
							</q-tr>
						</template>
					</q-table>
				</div>
				<div class="show-on-mobile q-pa-lg">
					<div v-for="user in userList" :key="user.id">
						<UserCard @deleteUser="deleteUser(user)" :user="user" />
					</div>
				</div>
			</div>
			<q-inner-loading
				class="absolute-center core-bg-primary text-20 full-width full-height"
				:showing="pageLoadingState"
				color="accent-0"
			/>
			<MainDialog :content="$options.components.DeleteConfirmation" />
			<MobileFilter :searchVisible="true" :pathEndPoint="'userManagement'" />
		</div>
	</transition>
</template>

<script src="./script/Users.js"></script>
<style>
@import url('./style/Users.scss');
</style>
