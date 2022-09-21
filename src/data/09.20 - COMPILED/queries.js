/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($followerId: ID!, $followeeId: ID!) {
    getFollowRelationship(followerId: $followerId, followeeId: $followeeId) {
      followeeId
      followerId
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $followerId: ID
    $followeeId: ModelIDKeyConditionInput
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollowRelationships(
      followerId: $followerId
      followeeId: $followeeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        followeeId
        followerId
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listPaymentsBySpecificOwner = /* GraphQL */ `
  query ListPaymentsBySpecificOwner(
    $owner: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentsBySpecificOwner(
      owner: $owner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const listPaymentsSortedByTimestamp = /* GraphQL */ `
  query ListPaymentsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      owner
      userPointer {
        name
        realName
        handle
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        userPointer {
          name
          realName
          handle
          pictureURL
          bio
          premium
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
      nextToken
    }
  }
`;
export const listPostsBySpecificOwner = /* GraphQL */ `
  query ListPostsBySpecificOwner(
    $owner: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsBySpecificOwner(
      owner: $owner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        owner
        userPointer {
          name
          realName
          handle
          pictureURL
          bio
          premium
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
      nextToken
    }
  }
`;
export const listPostsSortedByTimestamp = /* GraphQL */ `
  query ListPostsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        owner
        userPointer {
          name
          realName
          handle
          pictureURL
          bio
          premium
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
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
          pictureURL
          bio
          premium
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likeUserId
        likeUserHandle
        createdAt
        post {
          id
          content
          owner
          timestamp
          type
          createdAt
          updatedAt
        }
        postID
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLikesByOwner = /* GraphQL */ `
  query ListLikesByOwner(
    $likeUserId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesByOwner(
      likeUserId: $likeUserId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        likeUserId
        likeUserHandle
        createdAt
        post {
          id
          content
          owner
          timestamp
          type
          createdAt
          updatedAt
        }
        postID
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($name: String!) {
    getUserInfo(name: $name) {
      name
      realName
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
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $name: String
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserInfos(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        realName
        handle
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
      }
      nextToken
    }
  }
`;
