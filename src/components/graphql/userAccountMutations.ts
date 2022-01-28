import { gql } from "@apollo/client/core";
import { DefaultApolloClient, useApolloClient } from "@vue/apollo-composable";

export const AddUserAccountMutation = gql`
  mutation addUserAccount($name: String!) {
		addUserAccount(name: $name) {
			name
			id
			amount
			share
		}
	}
`

export const AddFundsToUserAccountMutation = gql`
  mutation addFundsToUserAccount($id: ID!, $amount: Float!) {
    addFundsToUserAccount(id: $id, amount: $amount) {
			name
			id
			amount
			share
		},
        
	}
`

