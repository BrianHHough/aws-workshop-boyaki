/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeline = /* GraphQL */ `
  query GetTimeline($id: ID!) {
    getTimeline(id: $id) {
      userId
      timestamp
      postId
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
          impressions
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
        impressions
        createdAt
        updatedAt
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
          id
          content
          owner
          totalVisibility
          feedVisibility
          timestamp
          type
          impressions
          createdAt
          updatedAt
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
export const getChatsAvailable = /* GraphQL */ `
  query GetChatsAvailable($id: ID!) {
    getChatsAvailable(id: $id) {
      id
      status
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
        impressions
        createdAt
        updatedAt
        followerId
        owner
      }
      chatID
      chatPointer {
        id
        chatOriginator
        users {
          name
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        name
        messages {
          nextToken
        }
        type
        timestamp
        chatsAvailableConnection {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      type
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listChatsAvailables = /* GraphQL */ `
  query ListChatsAvailables(
    $filter: ModelChatsAvailableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsAvailables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
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
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        chatID
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        type
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      chatOriginator
      users {
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
        impressions
        createdAt
        updatedAt
        followerId
        owner
      }
      name
      messages {
        items {
          id
          text
          messageOwner
          type
          timestamp
          createdAt
          updatedAt
          chatMessagesId
          chatMessageChatPointerId
          owner
        }
        nextToken
      }
      type
      timestamp
      chatsAvailableConnection {
        items {
          id
          status
          owner
          chatID
          type
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatOriginator
        users {
          name
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        name
        messages {
          nextToken
        }
        type
        timestamp
        chatsAvailableConnection {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
      id
      chatPointer {
        id
        chatOriginator
        users {
          name
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        name
        messages {
          nextToken
        }
        type
        timestamp
        chatsAvailableConnection {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      text
      messageOwner
      type
      timestamp
      createdAt
      updatedAt
      chatMessagesId
      chatMessageChatPointerId
      owner
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        text
        messageOwner
        type
        timestamp
        createdAt
        updatedAt
        chatMessagesId
        chatMessageChatPointerId
        owner
      }
      nextToken
    }
  }
`;
export const getBoyakiRecordPrivate = /* GraphQL */ `
  query GetBoyakiRecordPrivate($id: ID!) {
    getBoyakiRecordPrivate(id: $id) {
      id
      description
      status
      parent {
        id
        description
        status
        privateRecord {
          nextToken
        }
        mixedRecord {
          nextToken
        }
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      parentPointer
      secretOwnerField
      publicField
      timestamp
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBoyakiRecordPrivates = /* GraphQL */ `
  query ListBoyakiRecordPrivates(
    $filter: ModelBoyakiRecordPrivateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoyakiRecordPrivates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
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
export const listChatsAvailableByUser = /* GraphQL */ `
  query ListChatsAvailableByUser(
    $owner: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatsAvailableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsAvailableByUser(
      owner: $owner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
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
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        chatID
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        type
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listChatsAvailableByConnection = /* GraphQL */ `
  query ListChatsAvailableByConnection(
    $chatID: ID!
    $timestampOwner: ModelChatsAvailableChatsAvailableConnectionCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatsAvailableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsAvailableByConnection(
      chatID: $chatID
      timestampOwner: $timestampOwner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
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
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        chatID
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        type
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listChatsAvailableSortedByTimestamp = /* GraphQL */ `
  query ListChatsAvailableSortedByTimestamp(
    $type: String!
    $timestampOwner: ModelChatsAvailableSortChatsAvailableByTimestampCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatsAvailableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsAvailableSortedByTimestamp(
      type: $type
      timestampOwner: $timestampOwner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
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
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        chatID
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        type
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listChatsSortedByOwner = /* GraphQL */ `
  query ListChatsSortedByOwner(
    $chatOriginator: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsSortedByOwner(
      chatOriginator: $chatOriginator
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatOriginator
        users {
          name
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        name
        messages {
          nextToken
        }
        type
        timestamp
        chatsAvailableConnection {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listChatsSortedByTimestamp = /* GraphQL */ `
  query ListChatsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatOriginator
        users {
          name
          realName
          handle
          aliasLowerCase
          pictureURL
          bio
          premium
          followersNumber
          followingNumber
          impressions
          createdAt
          updatedAt
          followerId
          owner
        }
        name
        messages {
          nextToken
        }
        type
        timestamp
        chatsAvailableConnection {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listChatMessagesByOwner = /* GraphQL */ `
  query ListChatMessagesByOwner(
    $messageOwner: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessagesByOwner(
      messageOwner: $messageOwner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        text
        messageOwner
        type
        timestamp
        createdAt
        updatedAt
        chatMessagesId
        chatMessageChatPointerId
        owner
      }
      nextToken
    }
  }
`;
export const listChatMessagesSortedByTimestamp = /* GraphQL */ `
  query ListChatMessagesSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessagesSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatPointer {
          id
          chatOriginator
          name
          type
          timestamp
          createdAt
          updatedAt
          owner
        }
        text
        messageOwner
        type
        timestamp
        createdAt
        updatedAt
        chatMessagesId
        chatMessageChatPointerId
        owner
      }
      nextToken
    }
  }
`;
export const listPrivateRecordsByPublicRecord = /* GraphQL */ `
  query ListPrivateRecordsByPublicRecord(
    $parentPointer: ID!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoyakiRecordPrivateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRecordsByPublicRecord(
      parentPointer: $parentPointer
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listPrivateRecordsSortedByTimestamp = /* GraphQL */ `
  query ListPrivateRecordsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoyakiRecordPrivateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateRecordsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
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
        impressions
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
      impressions
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
          impressions
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
        impressions
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
          impressions
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
        impressions
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
          impressions
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
        impressions
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
          impressions
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
        impressions
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
          totalVisibility
          feedVisibility
          timestamp
          type
          impressions
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
          totalVisibility
          feedVisibility
          timestamp
          type
          impressions
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
          totalVisibility
          feedVisibility
          timestamp
          type
          impressions
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
      impressions
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
        impressions
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
        impressions
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
        impressions
        createdAt
        updatedAt
        followerId
        owner
      }
      nextToken
    }
  }
`;
export const getBoyakiRecordPublic = /* GraphQL */ `
  query GetBoyakiRecordPublic($id: ID!) {
    getBoyakiRecordPublic(id: $id) {
      id
      description
      status
      privateRecord {
        items {
          id
          description
          status
          parentPointer
          secretOwnerField
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      mixedRecord {
        items {
          id
          description
          status
          parentPointer
          secretOwnerField
          privateField
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      publicField
      timestamp
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBoyakiRecordPublics = /* GraphQL */ `
  query ListBoyakiRecordPublics(
    $filter: ModelBoyakiRecordPublicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoyakiRecordPublics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        privateRecord {
          nextToken
        }
        mixedRecord {
          nextToken
        }
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listPublicRecordsSortedByTimestamp = /* GraphQL */ `
  query ListPublicRecordsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoyakiRecordPublicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicRecordsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        privateRecord {
          nextToken
        }
        mixedRecord {
          nextToken
        }
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBoyakiRecordMixed = /* GraphQL */ `
  query GetBoyakiRecordMixed($id: ID!) {
    getBoyakiRecordMixed(id: $id) {
      id
      description
      status
      parent {
        id
        description
        status
        privateRecord {
          nextToken
        }
        mixedRecord {
          nextToken
        }
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      parentPointer
      secretOwnerField
      privateField
      publicField
      timestamp
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBoyakiRecordMixeds = /* GraphQL */ `
  query ListBoyakiRecordMixeds(
    $filter: ModelBoyakiRecordMixedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoyakiRecordMixeds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        privateField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listMixedRecordsByPublicRecord = /* GraphQL */ `
  query ListMixedRecordsByPublicRecord(
    $parentPointer: ID!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoyakiRecordMixedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMixedRecordsByPublicRecord(
      parentPointer: $parentPointer
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        privateField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listMixedRecordsSortedByTimestamp = /* GraphQL */ `
  query ListMixedRecordsSortedByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoyakiRecordMixedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMixedRecordsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        status
        parent {
          id
          description
          status
          publicField
          timestamp
          type
          createdAt
          updatedAt
          owner
        }
        parentPointer
        secretOwnerField
        privateField
        publicField
        timestamp
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
