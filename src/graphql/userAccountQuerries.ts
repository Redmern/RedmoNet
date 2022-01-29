import { gql } from "@apollo/client/core";

export const GetUserAccountsQuery = gql`
	query userAccounts {
	userAccounts {
		id
		name
		amount
		share
	}
	adminAccount {
		id
		name
		amount
		share
	}
}
`

export const GetUserAccountByIdQuery = gql`
	query userAccountById($id: ID!) {
		userAccountById(id: $id) {
			name
			id
			share
			amount
		}
	}
`

export const GetAdminAccountQuery = gql`
	query adminAccount {
		userAccounts{
			amount
		}
	}
`

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

