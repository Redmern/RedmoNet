<template>
	<div class="top-menu">

		<div>
			<i class="fas fa-user-plus" />
			<input v-model="Name" type="text" placeholder="Enter Name" />
		</div>
		<div>
			<i class="fas fa-folder-plus" />
			<input v-model="Name" type="text" placeholder="Enter Name" />
		</div>	

	</div>

      <!-- <section class="food-cards-overview">
        <div class="row">
          <AddUserForm />
        </div>
      </section> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddUserForm from "../components/Forms/AddUserForm.vue";

@Options({
  components: {
    AddUserForm,
  }
})

export default class AddUser extends Vue{
  
};
</script>

<style lang="scss">
.container {
  max-width: 100%;
}

.main-card {
  // margin-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
  min-height: 95vh;
  padding: 3em 3em 3em 3em;
  background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
  background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
  transition: margin-left 0.5s;
  transition: width 0.5s;
  border: none;
}

.wallet-card {
  margin-bottom: 25px;
}
</style>
