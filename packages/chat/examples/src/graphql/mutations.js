/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage($body: String!) {
    createMessage(body: $body) {
      messageId
      body
      createdAt
      handle
    }
  }
`;
