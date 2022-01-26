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