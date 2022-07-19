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

