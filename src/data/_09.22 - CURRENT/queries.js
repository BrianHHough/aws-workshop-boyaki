/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeline = /* GraphQL */ `
  query GetTimeline($id: ID!) {
    getTimeline(id: $id) {
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
export const listTimelines = /* GraphQL */ `
  query ListTimelines(
    $filter: ModelTimelineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        timestamp
        postId
        post {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($followerId: ID!, $followeeId: ID!) {
    getFollowRelationship(followerId: $followerId, followeeId: $followeeId) {
      followerId
      followeeId
      timestamp
      type
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
        followerId
        followeeId
        timestamp
        type
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
export const listFollowsByFollowerId = /* GraphQL */ `
  query ListFollowsByFollowerId(
    $followerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowsByFollowerId(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followerId
        followeeId
        timestamp
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listFollowsByFolloweeId = /* GraphQL */ `
  query ListFollowsByFolloweeId(
    $followeeId: ID!
    $followerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowsByFolloweeId(
      followeeId: $followeeId
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followerId
        followeeId
        timestamp
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listFollowRelationshipsSortedByTimestamp = /* GraphQL */ `
  query ListFollowRelationshipsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowRelationshipsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followerId
        followeeId
        timestamp
        type
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
        followersNumber
        followingNumber
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
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
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
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          createdAt
          updatedAt
          followerId
          owner
        }
        # totalVisibility
        # feedVisibility
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
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          createdAt
          updatedAt
          followerId
          owner
        }
        # totalVisibility
        # feedVisibility
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
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
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
          # totalVisibility
          # feedVisibility
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
          # totalVisibility
          # feedVisibility
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
export const getFollowObject = /* GraphQL */ `
  query GetFollowObject($id: ID!) {
    getFollowObject(id: $id) {
      id
      followerID
      followeeID
      timestamp
      createdAt
      updatedAt
      followHead
    }
  }
`;
export const listFollowObjects = /* GraphQL */ `
  query ListFollowObjects(
    $filter: ModelFollowObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerID
        followeeID
        timestamp
        createdAt
        updatedAt
        followHead
      }
      nextToken
    }
  }
`;
export const listFollowsBySpecificOwner = /* GraphQL */ `
  query ListFollowsBySpecificOwner(
    $followerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowsBySpecificOwner(
      followerID: $followerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        timestamp
        createdAt
        updatedAt
        followHead
      }
      nextToken
    }
  }
`;
export const listOfFollowedAccounts = /* GraphQL */ `
  query ListOfFollowedAccounts(
    $followeeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfFollowedAccounts(
      followeeID: $followeeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        timestamp
        createdAt
        updatedAt
        followHead
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
      aliasLowerCase
      post {
        items {
          id
          content
          owner
          # totalVisibility
          # feedVisibility
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
      followersNumber
      followingNumber
      createdAt
      updatedAt
      followerId
      owner
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
        followersNumber
        followingNumber
        createdAt
        updatedAt
        followerId
        owner
      }
      nextToken
    }
  }
`;
export const userByHandle = /* GraphQL */ `
  query UserByHandle(
    $handle: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByHandle(
      handle: $handle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        realName
        handle
        aliasLowerCase
        post(sortDirection: DESC) {
          items {
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
              createdAt
              updatedAt
              followerId
              owner
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
        pictureURL
        bio
        premium
        # payment {
        #   nextToken
        # }
        followersNumber
        followingNumber
        createdAt
        updatedAt
        followerId
        owner
      }
      nextToken
    }
  }
`;
export const userByHandleLowerCaseCheck = /* GraphQL */ `
  query UserByHandleLowerCaseCheck(
    $aliasLowerCase: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByHandleLowerCaseCheck(
      aliasLowerCase: $aliasLowerCase
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        followersNumber
        followingNumber
        createdAt
        updatedAt
        followerId
        owner
      }
      nextToken
    }
  }
`;
