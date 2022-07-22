/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship($followerId: String) {
    onCreateFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowRelationship = /* GraphQL */ `
  subscription OnUpdateFollowRelationship($followerId: String) {
    onUpdateFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship($followerId: String) {
    onDeleteFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      content
      owner
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      content
      owner
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      content
      owner
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
