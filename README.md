## Getting Started

#### Clone the repo

```bash
# Go out of the previous project
cd ~

# Clone the repo
git clone https://github.com/ross-u/JS-Indexing-Example.git

cd JS-Indexing-Example

code .
```

### STEP 1

In our first step we will simulate looking for an "user object" using 2 search criterias (`id` and `city`) in the collection which is not indexed.

In this example we have a really large array (40k objects :open_mouth: ), that serves as a mock/example of a database collection `users` .

If we try to search through all of the 40k users in order to find the last user with `id: 39999` and `city: "Los Angeles"`, there is a probability that we will have to traverse the entire collection (array in our case).

Let's create a function that does this search and let's time it's performance.

##### `index.js`

```js
console.log(users);

function findDocumentWithoutIndex(collection, id, city) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id === id && collection[i].city === city) {
      return collection[i];
    }
  }
}

console.time("Find user without index");

var foundUser = findDocumentWithoutIndex(users, 39999, "Los Angeles");

console.timeEnd("Find user without index");

console.log(foundUser);
```

<br>

### STEP 2

In order to optimize the search for a user by these 2 criterias ( `id` and `city`) we can create an index/dictionary, and sort all users **by** their **city**.

Let's create a function which takes the original user collection/array and creates a collection (object named `indexedUsers`) indexed by `city` names.

```js
function createIndex(data) {
  const index = {};

  data.forEach(function(userData) {
    if (!index[userData.city]) {
      index[userData.city] = [userData.id];
    } else {
      index[userData.city].push(userData.id);
    }
  });
  return index;
}

console.time("Index the users by city");

const indexedUsers = createIndex(users);

console.timeEnd("Index the users by city");

// INDEXED USERS
console.log(indexedUsers);
```

<br>

### STEP 3

We can now time the performance of the same search this time in the indexed collection.

Let's run the search and check it's performance.

```js
function findIndexedDocument(id, city) {
  for (let i = 0; i < indexedUsers[city].length; i++) {
    if (
      indexedUsers[city][i].id === id &&
      indexedUsers[city][i].city === city
    ) {
      return indexedUsers[city][i];
    }
  }
}

console.time("Find indexed user");

var foundUser2 = findDocumentByIdWithoutIndex(39999, "Los Angeles");

console.timeEnd("Find indexed user");
```

<br>

### CONCLUSION

We can see that it is much faster to search over a indexed chunk in a collection, rather than potentially traversing the entire collection from beginning to the end.
