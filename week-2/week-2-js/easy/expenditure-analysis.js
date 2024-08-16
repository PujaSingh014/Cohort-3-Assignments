/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
// Type of Container:

// C++: std::map or std::unordered_map stores key-value pairs in a specific order (std::map sorts keys by default).
// JavaScript: Objects ({}) and Map structures are used interchangeably in most cases, but objects are more commonly used for key-value storage.
// Accessing Non-existent Key:

// C++: Accessing a non-existent key using mp[key] will create a default value and insert it into the map.
// JavaScript: Accessing a non-existent key using mp[key] will create a new property with that key and assign it the value undefined.

//Approach 1
function calculateTotalSpentByCategory(transactions) {
  let n = transactions.length;
  let spentPerCategory = {};
  for(let i=0; i<n; i++){
    let cat = transactions[i]["category"];
    let p = transactions[i]["price"];
    if(spentPerCategory[cat] == undefined){
      spentPerCategory[cat] = p;
    }
    else{
      spentPerCategory[cat] += p;
    }
  }
  let res=[];
  for(let key in spentPerCategory){
    res.push({category: key, totalSpent:spentPerCategory[key]});
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;




