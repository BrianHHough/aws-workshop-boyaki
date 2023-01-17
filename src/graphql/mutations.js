/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimeline = /* GraphQL */ `
  mutation CreateTimeline(
    $input: CreateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    createTimeline(input: $input, condition: $condition) {
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
export const updateTimeline = /* GraphQL */ `
  mutation UpdateTimeline(
    $input: UpdateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    updateTimeline(input: $input, condition: $condition) {
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
export const deleteTimeline = /* GraphQL */ `
  mutation DeleteTimeline(
    $input: DeleteTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    deleteTimeline(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createFollowRelationship = /* GraphQL */ `
  mutation CreateFollowRelationship(
    $input: CreateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    createFollowRelationship(input: $input, condition: $condition) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowRelationship = /* GraphQL */ `
  mutation UpdateFollowRelationship(
    $input: UpdateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    updateFollowRelationship(input: $input, condition: $condition) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowRelationship = /* GraphQL */ `
  mutation DeleteFollowRelationship(
    $input: DeleteFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    deleteFollowRelationship(input: $input, condition: $condition) {
      followerId
      followeeId
      timestamp
      type
      createdAt
      updatedAt
    }
  }
`;
export const createFollowObject = /* GraphQL */ `
  mutation CreateFollowObject(
    $input: CreateFollowObjectInput!
    $condition: ModelFollowObjectConditionInput
  ) {
    createFollowObject(input: $input, condition: $condition) {
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
export const updateFollowObject = /* GraphQL */ `
  mutation UpdateFollowObject(
    $input: UpdateFollowObjectInput!
    $condition: ModelFollowObjectConditionInput
  ) {
    updateFollowObject(input: $input, condition: $condition) {
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
export const deleteFollowObject = /* GraphQL */ `
  mutation DeleteFollowObject(
    $input: DeleteFollowObjectInput!
    $condition: ModelFollowObjectConditionInput
  ) {
    deleteFollowObject(input: $input, condition: $condition) {
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
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createChatsAvailable = /* GraphQL */ `
  mutation CreateChatsAvailable(
    $input: CreateChatsAvailableInput!
    $condition: ModelChatsAvailableConditionInput
  ) {
    createChatsAvailable(input: $input, condition: $condition) {
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
export const updateChatsAvailable = /* GraphQL */ `
  mutation UpdateChatsAvailable(
    $input: UpdateChatsAvailableInput!
    $condition: ModelChatsAvailableConditionInput
  ) {
    updateChatsAvailable(input: $input, condition: $condition) {
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
export const deleteChatsAvailable = /* GraphQL */ `
  mutation DeleteChatsAvailable(
    $input: DeleteChatsAvailableInput!
    $condition: ModelChatsAvailableConditionInput
  ) {
    deleteChatsAvailable(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
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
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
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
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
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
export const createBoyakiRecordPublic = /* GraphQL */ `
  mutation CreateBoyakiRecordPublic(
    $input: CreateBoyakiRecordPublicInput!
    $condition: ModelBoyakiRecordPublicConditionInput
  ) {
    createBoyakiRecordPublic(input: $input, condition: $condition) {
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
export const updateBoyakiRecordPublic = /* GraphQL */ `
  mutation UpdateBoyakiRecordPublic(
    $input: UpdateBoyakiRecordPublicInput!
    $condition: ModelBoyakiRecordPublicConditionInput
  ) {
    updateBoyakiRecordPublic(input: $input, condition: $condition) {
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
export const deleteBoyakiRecordPublic = /* GraphQL */ `
  mutation DeleteBoyakiRecordPublic(
    $input: DeleteBoyakiRecordPublicInput!
    $condition: ModelBoyakiRecordPublicConditionInput
  ) {
    deleteBoyakiRecordPublic(input: $input, condition: $condition) {
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
export const createBoyakiRecordPrivate = /* GraphQL */ `
  mutation CreateBoyakiRecordPrivate(
    $input: CreateBoyakiRecordPrivateInput!
    $condition: ModelBoyakiRecordPrivateConditionInput
  ) {
    createBoyakiRecordPrivate(input: $input, condition: $condition) {
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
export const updateBoyakiRecordPrivate = /* GraphQL */ `
  mutation UpdateBoyakiRecordPrivate(
    $input: UpdateBoyakiRecordPrivateInput!
    $condition: ModelBoyakiRecordPrivateConditionInput
  ) {
    updateBoyakiRecordPrivate(input: $input, condition: $condition) {
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
export const deleteBoyakiRecordPrivate = /* GraphQL */ `
  mutation DeleteBoyakiRecordPrivate(
    $input: DeleteBoyakiRecordPrivateInput!
    $condition: ModelBoyakiRecordPrivateConditionInput
  ) {
    deleteBoyakiRecordPrivate(input: $input, condition: $condition) {
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
export const createBoyakiRecordMixed = /* GraphQL */ `
  mutation CreateBoyakiRecordMixed(
    $input: CreateBoyakiRecordMixedInput!
    $condition: ModelBoyakiRecordMixedConditionInput
  ) {
    createBoyakiRecordMixed(input: $input, condition: $condition) {
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
export const updateBoyakiRecordMixed = /* GraphQL */ `
  mutation UpdateBoyakiRecordMixed(
    $input: UpdateBoyakiRecordMixedInput!
    $condition: ModelBoyakiRecordMixedConditionInput
  ) {
    updateBoyakiRecordMixed(input: $input, condition: $condition) {
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
export const deleteBoyakiRecordMixed = /* GraphQL */ `
  mutation DeleteBoyakiRecordMixed(
    $input: DeleteBoyakiRecordMixedInput!
    $condition: ModelBoyakiRecordMixedConditionInput
  ) {
    deleteBoyakiRecordMixed(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
