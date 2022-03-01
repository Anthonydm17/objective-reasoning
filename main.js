// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// ## 1. `isAdmin`

function isAdmin(user){
    if (user.userRole === 'ADMIN'){
        return true
    }
    else return false
}




// ## 2. `getEmail`


function getEmail(user){
    return user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';
}


// ## 3. `getPlaylistLength`


function getPlaylistLength(name){
    return name.songs.length;
}


// ## 4. `getHardestHomework`

function getHardestHomework(arr){
let hardest = '';
let x = 100;

for (let i = 0; i <arr.length; i++){
   const hard = arr[i].averageScore;
    if (hard < x){
        x = hard
        hardest = arr[i].name
    }else if (arr[i] == 0){
        return hardest
    }
}
return hardest
}

// ## 5. `createPhonebook`

function createPhonebook(name,phone){
let phonebook = {};
for (let i = 0; i < name.length; i ++){
    phonebook[name[i]] = phone[i];
}
    
return phonebook
}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};