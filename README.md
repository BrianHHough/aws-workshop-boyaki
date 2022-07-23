# Boyaki
AWS Workshop full-stack social media application.


## GraphQL Queries/Mutations

### Mutations

💻 **For: Local Mocking and Testing:**
```graphql
# ✅  This works once you authenticate a user
mutation MyMutation {
  createPost(
    input: {content: "Testing", owner: "User1", timestamp: 1585222654, type: "Post"}
  ) {
    id
    content
    createdAt
    owner
  }
}
```


### create follow relationship (7/21)

```graphql
mutation MyMutation {
  createFollowRelationship(input: {followeeId: "username1", followerID: "userappsyncmock", timestamp: 1585299648}) {
    createdAt
    followeeId
    followerID
    followerId
    timestamp
    updatedAt
  }
}

```

Output is:

```json
{
  "data": {
    "createFollowRelationship": {
      "createdAt": "2022-07-22T02:50:15.245Z",
      "followeeId": "username1",
      "followerID": "userappsyncmock",
      "followerId": "userappsyncmock",
      "timestamp": 1585299648,
      "updatedAt": "2022-07-22T02:50:15.245Z"
    }
  }
}
```


```graphql
# ✅  This creates a follow relationship
mutation MyMutation {
  createFollowRelationship(
    input: {followeeId: "User1", followerId: "User2", timestamp: 1585299648}
  ) {
    createdAt
    followeeId
    followerId
    timestamp
    updatedAt
  }
}
```
Output is:

```json
{
  "data": {
    "createFollowRelationship": {
      "createdAt": "2022-07-21T19:36:54.078Z",
      "followeeId": "User1",
      "followerId": "User2",
      "timestamp": 1585299648,
      "updatedAt": "2022-07-21T19:36:54.078Z"
    }
  }
}
```

☁️ **For: AWS AppSync:**

```graphql
# ✅  This works once you login as the user
mutation MyMutation {
  createPost(
    input: {content: "Testing", owner: "userappsyncmock", timestamp: 1585222654, type: "Post"}
  ) {
    id
    content
    createdAt
    owner
  }
}
```

### Create a like (userID is auto-populated)

```graphql
mutation MyMutation {
  createLike(input: {postID: "ddcd16e5-250c-4c38-95ec-04993d4d3c0f"}) {
    id
    likeUserHandle
    likeUserId
  }
}
```
or
```graphql
mutation MyMutation {
  createLike(input: {postID: "8df0fe08-6cad-4b0b-b2b4-0a41d06706a3"}) {
    id
    likeUserHandle
    likeUserId
  }
}
```


### Queries

💻 **For: Local Mocking and Testing:**

#### List Posts Sorted by Time

```graphql
query MyQuery {
  listPostsSortedByTimestamp(type: "Post", sortDirection: DESC) {
    items {
      owner
      timestamp
      content
      createdAt
    }
  }
}
```

#### List Posts Sorted by User and By Time

```graphql
query MyQuery {
  listPostsBySpecificOwner(owner: "User2", sortDirection: DESC) {
    items {
      id
      owner
      createdAt
      content
    }
  }
}
```

```graphql
query MyQuery {
  listPostsBySpecificOwner(owner: "dba56bd6-16c1-4528-b0f2-0273662e257e::username1", sortDirection: DESC, limit: 10) {
    items {
      content
      id
      createdAt
      owner
    }
  }
}
```



### Get a particular follow relationship
```graphql
query MyQuery {
  getFollowRelationship(id: "testfollow::username1") {
    id
    followerId
    followeeId
    createdAt
  }
}
```

### List the follow relationships

```graphql
query MyQuery {
  listFollowRelationships(followerId: "username1") {
    items {
      createdAt
      followerId
      followeeId
      timestamp
      updatedAt
    }
  }
}
```

Output is:
```json
{
  "data": {
    "listFollowRelationships": {
      "items": [
        {
          "createdAt": "2022-07-22T03:17:04.321Z",
          "followerId": "username1",
          "followeeId": "testfollow",
          "timestamp": 1658459824,
          "updatedAt": "2022-07-22T03:17:04.321Z"
        }
      ]
    }
  }
}
```

## Additional Info

### `useParams()`
- **Description:** The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
- **Link:** https://reactrouter.com/docs/en/v6/hooks/use-params

