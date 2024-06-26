import { gql } from '@apollo/client';

export const LOGIN = gql `
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      username
    }
    token
  }
}
`;

export const SIGNUP = gql  `
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;

export const SAVE_GAME = gql `
mutation SaveGame($newGame: GameInput) {
  saveGame(newGame: $newGame) {
    savedGames {
      _id
      name
      description
      platform
      Image
      releasedate
      progress
    }
  }
}
`;

export const REMOVE_GAME = gql `
mutation RemoveGame($gameId: ID!) {
  removeGame(gameId: $gameId) {
    savedGames {
      name
    }
  }
}
`;
