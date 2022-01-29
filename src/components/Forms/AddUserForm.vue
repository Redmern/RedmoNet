<template>
  <div class="page"></div>
    <input v-model="Name" placeholder="Enter Name" />
    <!-- <p>{{ Name }}</p> -->
    <button class="btn btn-primary" @click="functionAddUser({name: Name})">Create</button>
    <!-- <button class="btn btn-secondary">Cancel</button> -->
    <p v-if="loading">hi</p>
</template>

<script lang="ts">

import {useMutation, useQuery} from '@vue/apollo-composable'
import {AddUserAccountMutation} from '@/graphql/userAccountMutations'
import {GetUserAccountsQuery} from '@/graphql/userAccountQuerries'
import { Options, Vue } from "vue-class-component";

@Options({
  
})


export default class AddUserFrom extends Vue{

  Name = ""

  result = useQuery(GetUserAccountsQuery)

  addUserAccount = useMutation(AddUserAccountMutation, {
    refetchQueries: ['userAccounts']
  })

  loading = this.addUserAccount.loading

  functionAddUser = this.addUserAccount.mutate

  
}

</script>

