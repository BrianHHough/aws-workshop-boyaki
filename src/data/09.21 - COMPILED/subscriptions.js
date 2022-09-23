/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline {
    onCreateTimeline {
      userId
      timestamp
      postId
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeline = /* GraphQL */ `
  subscription OnUpdateTimeline {
    onUpdateTimeline {
      userId
      timestamp
      postId
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeline = /* GraphQL */ `
  subscription OnDeleteTimeline {
    onDeleteTimeline {
      userId
      timestamp
      postId
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($owner: String) {
    onCreatePayment(owner: $owner) {
      id
      owner
      typeOfPayment
      costOfPayment
      invoiceURL
      type
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($owner: String) {
    onUpdatePayment(owner: $owner) {
      id
      owner
      typeOfPayment
      costOfPayment
      invoiceURL
      type
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($owner: String) {
    onDeletePayment(owner: $owner) {
      id
      owner
      typeOfPayment
      costOfPayment
      invoiceURL
      type
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
        realName
        handle
        aliasLowerCase
        post {
          nextToken
        }
        pictureURL
        bio
        premium
        payment {
          nextToken
        }
        createdAt
        updatedAt
        followerId
        owner
      }
      totalVisibility
      feedVisibility
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
        realName
        handle
        aliasLowerCase
        post {
          nextToken
        }
        pictureURL
        bio
        premium
        payment {
          nextToken
        }
        createdAt
        updatedAt
        followerId
        owner
      }
      totalVisibility
      feedVisibility
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
        realName
        handle
        aliasLowerCase
        post {
          nextToken
        }
        pictureURL
        bio
        premium
        payment {
          nextToken
        }
        createdAt
        updatedAt
        followerId
        owner
      }
      totalVisibility
      feedVisibility
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
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          createdAt
          updatedAt
          followerId
          owner
        }
        totalVisibility
        feedVisibility
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
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          createdAt
          updatedAt
          followerId
          owner
        }
        totalVisibility
        feedVisibility
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
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          createdAt
          updatedAt
          followerId
          owner
        }
        totalVisibility
        feedVisibility
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
  subscription OnCreateUserInfo($followerId: String, $owner: String) {
    onCreateUserInfo(followerId: $followerId, owner: $owner) {
      name
      realName
      handle
      aliasLowerCase
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      premium
      payment {
        items {
          id
          owner
          typeOfPayment
          costOfPayment
          invoiceURL
          type
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      followerId
      owner
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($followerId: String, $owner: String) {
    onUpdateUserInfo(followerId: $followerId, owner: $owner) {
      name
      realName
      handle
      aliasLowerCase
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      premium
      payment {
        items {
          id
          owner
          typeOfPayment
          costOfPayment
          invoiceURL
          type
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      followerId
      owner
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($followerId: String, $owner: String) {
    onDeleteUserInfo(followerId: $followerId, owner: $owner) {
      name
      realName
      handle
      aliasLowerCase
      post {
        items {
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureURL
      bio
      premium
      payment {
        items {
          id
          owner
          typeOfPayment
          costOfPayment
          invoiceURL
          type
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      followerId
      owner
    }
  }
`;
