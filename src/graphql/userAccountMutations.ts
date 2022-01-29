import { gql } from "@apollo/client/core";

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

