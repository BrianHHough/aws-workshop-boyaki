/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline($filter: ModelSubscriptionTimelineFilterInput) {
    onCreateTimeline(filter: $filter) {
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
export const onUpdateTimeline = /* GraphQL */ `
  subscription OnUpdateTimeline($filter: ModelSubscriptionTimelineFilterInput) {
    onUpdateTimeline(filter: $filter) {
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
export const onDeleteTimeline = /* GraphQL */ `
  subscription OnDeleteTimeline($filter: ModelSubscriptionTimelineFilterInput) {
    onDeleteTimeline(filter: $filter) {
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
export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship(
    $filter: ModelSubscriptionFollowRelationshipFilterInput
    $followerId: String
  ) {
    onCreateFollowRelationship(filter: $filter, followerId: $followerId) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowRelationship = /* GraphQL */ `
  subscription OnUpdateFollowRelationship(
    $filter: ModelSubscriptionFollowRelationshipFilterInput
    $followerId: String
  ) {
    onUpdateFollowRelationship(filter: $filter, followerId: $followerId) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship(
    $filter: ModelSubscriptionFollowRelationshipFilterInput
    $followerId: String
  ) {
    onDeleteFollowRelationship(filter: $filter, followerId: $followerId) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onCreatePayment(filter: $filter, owner: $owner) {
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
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onUpdatePayment(filter: $filter, owner: $owner) {
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
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $owner: String
  ) {
    onDeletePayment(filter: $filter, owner: $owner) {
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
export const onCreateChatsAvailable = /* GraphQL */ `
  subscription OnCreateChatsAvailable(
    $filter: ModelSubscriptionChatsAvailableFilterInput
    $owner: String
  ) {
    onCreateChatsAvailable(filter: $filter, owner: $owner) {
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
export const onUpdateChatsAvailable = /* GraphQL */ `
  subscription OnUpdateChatsAvailable(
    $filter: ModelSubscriptionChatsAvailableFilterInput
    $owner: String
  ) {
    onUpdateChatsAvailable(filter: $filter, owner: $owner) {
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
export const onDeleteChatsAvailable = /* GraphQL */ `
  subscription OnDeleteChatsAvailable(
    $filter: ModelSubscriptionChatsAvailableFilterInput
    $owner: String
  ) {
    onDeleteChatsAvailable(filter: $filter, owner: $owner) {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat(
    $filter: ModelSubscriptionChatFilterInput
    $owner: String
  ) {
    onCreateChat(filter: $filter, owner: $owner) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat(
    $filter: ModelSubscriptionChatFilterInput
    $owner: String
  ) {
    onUpdateChat(filter: $filter, owner: $owner) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat(
    $filter: ModelSubscriptionChatFilterInput
    $owner: String
  ) {
    onDeleteChat(filter: $filter, owner: $owner) {
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onCreateChatMessage(filter: $filter, owner: $owner) {
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
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onUpdateChatMessage(filter: $filter, owner: $owner) {
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
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onDeleteChatMessage(filter: $filter, owner: $owner) {
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
export const onCreateBoyakiRecordPrivate = /* GraphQL */ `
  subscription OnCreateBoyakiRecordPrivate(
    $filter: ModelSubscriptionBoyakiRecordPrivateFilterInput
    $owner: String
  ) {
    onCreateBoyakiRecordPrivate(filter: $filter, owner: $owner) {
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
export const onUpdateBoyakiRecordPrivate = /* GraphQL */ `
  subscription OnUpdateBoyakiRecordPrivate(
    $filter: ModelSubscriptionBoyakiRecordPrivateFilterInput
    $owner: String
  ) {
    onUpdateBoyakiRecordPrivate(filter: $filter, owner: $owner) {
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
export const onDeleteBoyakiRecordPrivate = /* GraphQL */ `
  subscription OnDeleteBoyakiRecordPrivate(
    $filter: ModelSubscriptionBoyakiRecordPrivateFilterInput
    $owner: String
  ) {
    onDeleteBoyakiRecordPrivate(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $likeUserId: String
  ) {
    onCreateLike(filter: $filter, likeUserId: $likeUserId) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $likeUserId: String
  ) {
    onUpdateLike(filter: $filter, likeUserId: $likeUserId) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $likeUserId: String
  ) {
    onDeleteLike(filter: $filter, likeUserId: $likeUserId) {
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
export const onCreateFollowObject = /* GraphQL */ `
  subscription OnCreateFollowObject(
    $filter: ModelSubscriptionFollowObjectFilterInput
    $followHead: String
  ) {
    onCreateFollowObject(filter: $filter, followHead: $followHead) {
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
export const onUpdateFollowObject = /* GraphQL */ `
  subscription OnUpdateFollowObject(
    $filter: ModelSubscriptionFollowObjectFilterInput
    $followHead: String
  ) {
    onUpdateFollowObject(filter: $filter, followHead: $followHead) {
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
export const onDeleteFollowObject = /* GraphQL */ `
  subscription OnDeleteFollowObject(
    $filter: ModelSubscriptionFollowObjectFilterInput
    $followHead: String
  ) {
    onDeleteFollowObject(filter: $filter, followHead: $followHead) {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo(
    $filter: ModelSubscriptionUserInfoFilterInput
    $followerId: String
    $owner: String
  ) {
    onCreateUserInfo(filter: $filter, followerId: $followerId, owner: $owner) {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo(
    $filter: ModelSubscriptionUserInfoFilterInput
    $followerId: String
    $owner: String
  ) {
    onUpdateUserInfo(filter: $filter, followerId: $followerId, owner: $owner) {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo(
    $filter: ModelSubscriptionUserInfoFilterInput
    $followerId: String
    $owner: String
  ) {
    onDeleteUserInfo(filter: $filter, followerId: $followerId, owner: $owner) {
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
export const onCreateBoyakiRecordPublic = /* GraphQL */ `
  subscription OnCreateBoyakiRecordPublic(
    $filter: ModelSubscriptionBoyakiRecordPublicFilterInput
    $owner: String
  ) {
    onCreateBoyakiRecordPublic(filter: $filter, owner: $owner) {
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
export const onUpdateBoyakiRecordPublic = /* GraphQL */ `
  subscription OnUpdateBoyakiRecordPublic(
    $filter: ModelSubscriptionBoyakiRecordPublicFilterInput
    $owner: String
  ) {
    onUpdateBoyakiRecordPublic(filter: $filter, owner: $owner) {
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
export const onDeleteBoyakiRecordPublic = /* GraphQL */ `
  subscription OnDeleteBoyakiRecordPublic(
    $filter: ModelSubscriptionBoyakiRecordPublicFilterInput
    $owner: String
  ) {
    onDeleteBoyakiRecordPublic(filter: $filter, owner: $owner) {
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
export const onCreateBoyakiRecordMixed = /* GraphQL */ `
  subscription OnCreateBoyakiRecordMixed(
    $filter: ModelSubscriptionBoyakiRecordMixedFilterInput
    $owner: String
  ) {
    onCreateBoyakiRecordMixed(filter: $filter, owner: $owner) {
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
export const onUpdateBoyakiRecordMixed = /* GraphQL */ `
  subscription OnUpdateBoyakiRecordMixed(
    $filter: ModelSubscriptionBoyakiRecordMixedFilterInput
    $owner: String
  ) {
    onUpdateBoyakiRecordMixed(filter: $filter, owner: $owner) {
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
export const onDeleteBoyakiRecordMixed = /* GraphQL */ `
  subscription OnDeleteBoyakiRecordMixed(
    $filter: ModelSubscriptionBoyakiRecordMixedFilterInput
    $owner: String
  ) {
    onDeleteBoyakiRecordMixed(filter: $filter, owner: $owner) {
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
