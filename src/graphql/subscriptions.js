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
      userPointer {
        name
        handle
        post {
          nextToken
        }
        pictureURL
        bio
        createdAt
        updatedAt
        followerId
      }
      timestamp
      type
      likes {
        items {
          id
          likeUserId
          likeUserHandle
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
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
      userPointer {
        name
        handle
        post {
          nextToken
        }
        pictureURL
        bio
        createdAt
        updatedAt
        followerId
      }
      timestamp
      type
      likes {
        items {
          id
          likeUserId
          likeUserHandle
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
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
      userPointer {
        name
        handle
        post {
          nextToken
        }
        pictureURL
        bio
        createdAt
        updatedAt
        followerId
      }
      timestamp
      type
      likes {
        items {
          id
          likeUserId
          likeUserHandle
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($likeUserId: String) {
    onCreateLike(likeUserId: $likeUserId) {
      id
      likeUserId
      likeUserHandle
      createdAt
      post {
        id
        content
        owner
        userPointer {
          name
          handle
          pictureURL
          bio
          createdAt
          updatedAt
          followerId
        }
        timestamp
        type
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postID
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($likeUserId: String) {
    onUpdateLike(likeUserId: $likeUserId) {
      id
      likeUserId
      likeUserHandle
      createdAt
      post {
        id
        content
        owner
        userPointer {
          name
          handle
          pictureURL
          bio
          createdAt
          updatedAt
          followerId
        }
        timestamp
        type
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postID
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($likeUserId: String) {
    onDeleteLike(likeUserId: $likeUserId) {
      id
      likeUserId
      likeUserHandle
      createdAt
      post {
        id
        content
        owner
        userPointer {
          name
          handle
          pictureURL
          bio
          createdAt
          updatedAt
          followerId
        }
        timestamp
        type
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postID
      updatedAt
    }
  }
`;
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($followerId: String) {
    onCreateUserInfo(followerId: $followerId) {
      name
      handle
      post {
        items {
          id
          content
          owner
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      createdAt
      updatedAt
      followerId
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($followerId: String) {
    onUpdateUserInfo(followerId: $followerId) {
      name
      handle
      post {
        items {
          id
          content
          owner
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      createdAt
      updatedAt
      followerId
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($followerId: String) {
    onDeleteUserInfo(followerId: $followerId) {
      name
      handle
      post {
        items {
          id
          content
          owner
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      createdAt
      updatedAt
      followerId
    }
  }
`;
