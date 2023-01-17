# How to create Messages


## Step 1: Create Chat by an owner
```graphql
mutation MyMutation {
  createChat(input: {type: "Chat", chatOriginator: "username1", timestamp: 1673930912}) {
    id
  }
}
```
The response becomes:

```json
{
  "data": {
    "createChat": {
      "id": "1b2bf99d-f6a3-48cf-b719-d28abd617d44"
    }
  }
}
```

## Step 2: Create ChatsAvailable by an owner
- this might be best to happen via cloud?

```graphql
mutation MyMutation {
  createChatsAvailable(input: {chatID: "1b2bf99d-f6a3-48cf-b719-d28abd617d44", timestamp: 10, type: "ChatsAvailable", owner: "username1"}) {
    id
  }
}
```
The response becomes:

```json
{
  "data": {
    "createChatsAvailable": {
      "id": "a33c2658-2201-4485-9ac8-5afe2a28c1fa"
    }
  }
}
```

## Step 3: Get ChatsAvailable by User's ID

```graphql
query MyQuery {
  listChatsAvailableByUser(owner: "username1") {
    nextToken
    items {
      chatID
      id
    }
  }
}
```
The response becomes:

```json
{
  "data": {
    "listChatsAvailableByUser": {
      "nextToken": null,
      "items": [
        {
          "chatID": "1b2bf99d-f6a3-48cf-b719-d28abd617d44",
          "id": "a33c2658-2201-4485-9ac8-5afe2a28c1fa",
          "chatPointer": {
            "chatOriginator": "username1",
            "createdAt": "2023-01-17T04:49:04.736Z",
            "timestamp": 1673930912,
            "owner": "username1",
            "messages": {
              "items": []
            }
          }
        }
      ]
    }
  }
}
```


