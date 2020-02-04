console.log(users);

// STEP 1 - find object without indexing
/* 

function findDocumentByIdWithoutIndex(collection, id, city) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id === id && collection[i].city === city) {
      return collection[i];
    }
  }
}

console.time("Find user without index");

var foundUser = findDocumentByIdWithoutIndex(users, 39999, "Los Angeles");

console.timeEnd("Find user without index");

console.log(foundUser); 
*/

//
// STEP 2 - Index the users by city name
/* 
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
 */

//
// STEP 3 - Find documents indexed by city
/* 
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
*/
