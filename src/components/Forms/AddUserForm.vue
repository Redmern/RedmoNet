<template>
  <div class="page"></div>
    <input v-model="Name" placeholder="Enter Name" />
    <p>{{ Name }}</p>
    <input v-model="Amount" placeholder="Enter initial amount" />
    <p>{{ Amount }}</p>
    <button class="btn btn-primary" @click="updateCache">Create</button>
    <button class="btn btn-secondary">Cancel</button>
</template>

<script lang="ts">

import { ListTypeNode, ListValueNode, ObjectValueNode } from "graphql";
import gql from "graphql-tag"



export default {

  data() {
    return {
      Name: "",
      Amount: "",
    };
  },
  function: {
  },
}
</script>

