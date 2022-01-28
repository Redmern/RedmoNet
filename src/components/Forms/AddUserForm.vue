<template>
  <div class="page"></div>
    <input v-model="Name" placeholder="Enter Name" />
    <!-- <p>{{ Name }}</p> -->
    <button class="btn btn-primary" @click="functionAddUser({name: Name})">Create</button>
    <!-- <button class="btn btn-secondary">Cancel</button> -->
    <p v-if="loading">hi</p>
</template>

<script lang="ts">

import {useMutation, useQuery, useResult} from '@vue/apollo-composable'
import {AddUserAccountMutation} from '../graphql/userAccountMutations'
import {GetUserAccountsQuery} from '../graphql/userAccountQuerries'
import { Options, Vue } from "vue-class-component";

@Options({
  
})


export default class AddUserFrom extends Vue{

  result = useQuery(GetUserAccountsQuery)

  addUserAccount = useMutation(AddUserAccountMutation, {
    refetchQueries: ['userAccounts']
  })

  functionAddUser = this.addUserAccount.mutate

  data() {
    return {
      Name: "",
    };
  }
}

</script>

