function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length 
  && arr1.every((element, index) => element === arr2[index])
}

function getUsersNamesInAgeRange(users, gender) {
  if(users.length === 0 || !users || !Array.isArray(users) ||
     typeof gender !== "string" || !gender ) {
    return 0;
  }
  let filterUser = users.filter(user => user.gender === gender);
  if(filterUser.length === 0) {
    return 0;
  }
  let totalAge = filterUser.reduce((acc, user) => acc + user.age, 0);
  let averageAge = totalAge / filterUser.length;
  return averageAge;
}