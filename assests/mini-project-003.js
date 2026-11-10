// Mini project 3: Contact Book (about 2 hours)

// Contacts look like { id, name, phone, city, tags: [] }.
//  Every function takes the current list and 
// returns a new list, never changing the old one:

// -------------------------------------------------------

// addContact(list, { id, name, phone, city = "Unknown" }): refuse a duplicate id or an empty name.
// updateContact(list, id, changes): merge changes with spread. Refuse if not found.
// updateCity(list, id, city): a nested-looking update, kept immutable.
// removeContact(list, id): refuse if not found.
// addTag(list, id, tag) and removeTag(list, id, tag): no duplicate tags.
// searchContacts(list, text): case-insensitive match on the name.
// saveContacts(list) and loadContacts(): using JSON, safe when nothing is saved or the data is corrupt.
// printContacts(list): one line per contact, in the style of your receipt, or No contacts when empty.


// let contacts = [];

// let addContact = (list,contact) => {
//     const idStatus = list.some(elem => elem.id === id)
//     if(idStatus) {
//         return "Contact ID already exists"
//     } else if(!contact.name){
//         return "Contact name is empty"
//     } 
//     else {
//         console.log("else running")
//         const newList = [{...contact}]                          
//         return newList
//     }
// }

// contacts1 = addContact(contacts, { id: 1, name: "Asha", phone: "9876543210" });
// console.log(contacts)
// console.log(contacts1)


// ---updateContact

// const sampleContacts = [
//   { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//   { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//   { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];

// const updateContact = (list, id, changes) => {
//      const idStatus = list.findIndex(elem => elem.id === id)
//      console.log("idStatus -->", idStatus)
//     if(idStatus === -1) {
//         return list
//     }
//     else {
//         const newList = [...list]
//         newList.splice(idStatus,1, {...newList[idStatus],...changes} )
//         return newList
//     }
// }

// const updatedList =  updateContact(sampleContacts,1,{})
// const updatedList1 =  updateContact(sampleContacts,3,{ city: "Multan" })
// const updatedList2 =  updateContact(sampleContacts,99,{ city: "Sydney" })
// const updatedList3 =  updateContact(sampleContacts,99,{ phone: "03000000000", city: "Quetta" })
// console.log(updatedList)
// console.log(updatedList1)
// console.log(updatedList2)
// console.log(updatedList3)
// console.log(sampleContacts[2].city)

// updateCity(list, id, city): a nested-looking update, kept immutable.

// const sampleContacts = [
//     { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];

// let updateCity = (list, id, city) => {
//     const idStatus = list.findIndex(elem => elem.id === id)
//     if (idStatus === -1) {
//         return list
//     }
//     else {
//         const newList = [...list];
//         newList.splice(idStatus,1,{...newList[idStatus],city:city})
//         return newList
//     }
// }

// console.log(updateCity(sampleContacts,1,"Johansburg"))
// console.log(updateCity(sampleContacts, 3, "Multan"))
// console.log(updateCity(sampleContacts, 99, "Multan"))
// console.log(sampleContacts[2].city)

//--- removeContact(list, id): refuse if not found.

// const sampleContacts = [
//     { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];


// const removeContact = (list, id) => {
//     const idStatus = list.findIndex(elem => elem.id === id)
//     if (idStatus === -1) {
//         return list
//     }
//     else {
//         let newList = [...list]
//         newList = newList.filter(elem => elem.id != id)
//         return newList
//     }
// }



// console.log(removeContact(sampleContacts,2))

//--- addTag(list, id, tag) and removeTag(list, id, tag): no duplicate tags.


// const sampleContacts = [
//     { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];

// //initial draft (working but too long and messy)

// const addTag = (list, id, tag) => {
//     //1 confirming id
//     const idStatus = list.findIndex(elem => elem.id === id)
//     if (idStatus === -1) {
//         return list
//     }
//     else {

//         // removing whitespacing from tag 
//         tag = tag.trim()


//         //2: checking tags property missing and tag is valid value is given 

//         const missingStatus = list[idStatus].tags === undefined || list[idStatus].tags === null;
//         const blankStatus = tag === "" ? true : false  

//         if (missingStatus === true) {
//             let newList = [...list];

//             if (blankStatus === false) {
//                 newList.splice(idStatus, 1, { ...newList[idStatus], tags: [ tag] })

//                 return newList

//             } else {
//                 return list
//             }



//         } else if (missingStatus === false) {
//             let newList = [...list];
//             // console.log("newList  (before)-->:",newList)
//             let tagsArray = newList[idStatus].tags

//             if (blankStatus === true) {
//                 return list
//             }
//             else {
//                 //4:finding duplicate tag
//                 if(!tagsArray.includes(tag)){
//                     newList.splice(idStatus, 1, { ...newList[idStatus], tags: [...newList[idStatus].tags, tag] })
//                     return newList
//                 }
//                 else{
//                     return list
//                 }

//             }

//         }
//         else {
//             return list
//         }
//     }
// }

// // 1. normal add
// console.log(addTag(sampleContacts, 2, "Relative")[1].tags);   // ["Relative"]  (works now)


// // 2. duplicate: must return a list, with no second "work"
// console.log(addTag(sampleContacts, 1, "work")[0].tags);        // ["work"]  (now: crashes, function returned undefined)

// // 3. unknown id: same list back
// console.log(addTag(sampleContacts, 99, "x") === sampleContacts);  // true  (now: crashes on list[-1])

// // 4. blank tag refused
// console.log(addTag(sampleContacts, 1, "   ")[0].tags);         // ["work"]  (now: adds the blank tag)

// // 5. contact with no tags property
// console.log(addTag([{ id: 9, name: "Zed" }], 9, "new")[0].tags);  // ["new"]  (now: crashes)

// // 6. original untouched
// console.log("original -->   ",sampleContacts);                           // ["work"]

// //special case :

// console.log(addTag([{ id: 9, name: "Zed" }], 9, " "));


// second draft

// const sampleContacts = [
//     { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];

// let addTag = (list, id, tag) => {

//     //triming tag

//     tag = tag.trim()

//      // 1. not found

//     let index = list.findIndex(elem => elem.id === id)

//      if(index === -1) return list

//      //2:missing property

//     let tags  = list[index].tags??[]

//     //Blank tag check

//     if(tag === "") return list
//     //Duplicate check

//     if(tags.includes(tag)) return  list


//     //update tags array

//     let newList  = [...list]
//     newList.splice(index,1,{...newList[index], tags:[...tags,tag]})
//     return newList
// }



// 1. normal add
// console.log(addTag(sampleContacts, 2, "Relative")[1].tags);   // ["Relative"]  (works now)


// // // 2. duplicate: must return a list, with no second "work"
// console.log(addTag(sampleContacts, 1, "work")[0].tags);        // ["work"]  (now: crashes, function returned undefined)

// // // 3. unknown id: same list back
// console.log(addTag(sampleContacts, 99, "x") === sampleContacts);  // true  (now: crashes on list[-1])

// // // 4. blank tag refused
// console.log(addTag(sampleContacts, 1, "   ")[0].tags);         // ["work"]  (now: adds the blank tag)

// // // 5. contact with no tags property
// console.log(addTag([{ id: 9, name: "Zed" }], 9, "new")[0].tags );  // ["new"]  (now: crashes)

// // // 6. original untouched
// console.log("original -->   ",sampleContacts[0].tags);                           // ["work"]

// // //special case :

// console.log(addTag([{ id: 9, name: "Zed" }], 9, " "));

// ----------------------------------------   remove tag -----------------------------

// Instructions for removeTag

// Before writing any code (10 minutes): copy this table into your file as comments, and fill in the right-hand column in your own words.

// Situation	                                                   What should removeTag return?
// Contact id not found	                                                     -1
// Contact has no tags property	                                             contactslist
// Contact has tags: null	                                                 empty array --> []
// Tag isn’t in the contact’s tags	                                         contact list original
// Tag is blank or only spaces	                                             contact list original
// Tag has extra spaces (" work ") and "work" is in the list	             contact list with work tag removed
// Tag matches only by different case ("Work" vs "work")	                 removed work from list
// Removing the last remaining tag	


// const removeTag = (list, id, tag) => {

//     //check id is present
//     let index = list.findIndex(elem => elem.id === id)
//     if (index === -1) return list


//     //handle missing tags property

//     let tags = list[index].tags ?? []

//     //remove space from the tag in case

//     tag = tag.trim()

//     //check tag presence

//     if (!(tags.includes(tag))) return list


//     //remove tag given from tags given

//     tags = tags.filter(elem => elem !== tag)

//     //update list after removal

//     const newList = [...list]
//     newList.splice(index, 1, { ...newList[index], tags: tags }) /// newList.splice(index,1,{...newList[index],tags:[...tags]} --> (also correct)
//     return newList

// }


// const fresh = () => [
//     { id: 1, name: "A", tags: ["work", "gym"] },
//     { id: 2, name: "B", tags: ["solo"] },
//     { id: 3, name: "C" },
// ];

// console.log(removeTag(fresh(), 1, "gym")[0].tags);                 // ["work"]
// console.log(removeTag(fresh(), 2, "solo")[1].tags);                // []  (last tag removed)
// const a = fresh();
// console.log(removeTag(a, 1, "nope") === a);                        // true  (tag not there)
// console.log(removeTag(a, 99, "work") === a);                       // true  (no such contact)
// console.log(removeTag(a, 3, "x") === a);                           // true  (no tags property)
// console.log(removeTag(a, 1, "   ") === a);                         // true  (blank)
// console.log(removeTag(a, 1, " work ")[0].tags);                    // ["gym"]  (trimmed)

// const b = fresh();
// removeTag(b, 1, "gym");
// console.log(b[0].tags);                                            // ["work", "gym"]  (original untouched)

// const out = removeTag(fresh(), 1, "gym");
// console.log(out[1] === fresh()[1]);                                // false (a new fresh() each time, ignore)


//----------------------------------- warm up -----------------------------------------

// const sampleContacts = [
//     { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];




// const replaceContact = (list, contactObject) => {

//     //check contact is int he list of contacts

//     const {id} = contactObject;

//     const index =  list.findIndex(elem => elem.id === id)
//     if(index === -1) return list

//     //get copy of original list

//     const newList = [... list]

//     //updating the object in contact list

//     newList.splice(index, 1, contactObject)

//     return newList
// }



// console.log(replaceContact(sampleContacts,{ id: 2, name: "Basil", phone: "2321234567", city: "Melborne", tags: ["sucessfull"] }))


// Task 1: searchContacts(list, text)

// Think first. Fill in the right-hand column in your own words before writing code:

// Situation	                                                 What should it return?
// text matches part of a name ("sh" finds Ayesha)	    | list original
// Different case ("AYESHA")	                        | should be true ,not case sensitive
// Extra spaces around the text (" ahmed ")	            | should be removed
// No contact matches	                                | original list 
// text is blank	                                    | returned the list 
// text isn’t a string (undefined)	                    | return the list
// A contact has no name	                            | is replaced with empty string
// Match is at the start vs. the middle of the name	    | should be fully match


// const searchContacts = (list, text) => {

//     //remove space from text

//     text = text.trim()

//     //deal contact with no name

//     let newList = [...list]

//     newList = newList.map(elem => {
//         return {...elem,name:elem.name??" "}
//     })

//     //deal with blank text

//     if (text === "") return list

//     //change case for seacrh

//     text = text.toLowerCase()

//     //search in the list 

//     const result = newList.filter(elem => elem.name.toLowerCase().includes(text))

//     return result
// }

// const sampleContacts = [
//     { id: 1, name:undefined, phone: "03001234567", city: "Karachi", tags: ["work"] },
//     { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
//     { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
// ];



// // --- searchContacts (refactored --> much cleaner and professional approach)


// const searchContacts = (list,text) => {
//     //check only text is provided
//     if(typeof(text) !== 'string') return [];

//     //remove space and change the case 

//     text = text.trim().toLowerCase()

//     //filter relevant data

//     return list.filter(elem => elem.name??" ".toLocaleLowerCase().includes(text))
// }

// console.log(searchContacts(sampleContacts, "a").map(elem => elem.name))


// Task 2: saveContacts(list) and loadContacts()

// Think first:

// Situation	                                        What should loadContacts() return?
// First run, nothing saved	
// Saved list, then reloaded	
// Saved text is corrupt ("{bad")	
// Saved text is valid but not a list ({} or 5)	
// Save 3 contacts, then save 2	                                        


const sampleContacts = [
    { id: 1, name: undefined, phone: "03001234567", city: "Karachi", tags: ["work"] },
    { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
    { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
];


// localStorage.clear()

// const saveContacts = (list) => {

//     let text = JSON.stringify(list);

//     //set in localtorage

//     localStorage.setItem("contacts", text)

// }
// saveContacts(sampleContacts)

//safeParse 


const saveParse = (text, fallback) => {
    if (text === null || Array.isArray(text) !== true) return fallback
    try {
        return  JSON.parse(text)
    }catch(error) {
        return fallback
    }

}


const loadContacts = () => {

    let text = localStorage.getItem("contacts")

    //call safeParse

    return saveParse(text,[])


}

console.log(loadContacts())












