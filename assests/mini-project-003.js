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

const sampleContacts = [
    { id: 1, name: "Ayesha", phone: "03001234567", city: "Karachi", tags: ["work"] },
    { id: 2, name: "Ahmed", phone: "03121234567", city: "Lahore", tags: [] },
    { id: 3, name: "Usman", phone: "03331234567", city: "Islamabad", tags: ["family", "friend"] },
];

let updateCity = (list, id, city) => {
    const idStatus = list.findIndex(elem => elem.id === id)
    if (idStatus === -1) {
        return list
    }
    else {
        const newList = [...list];
        newList.splice(idStatus,1,{...newList[idStatus],city:city})
        return newList
    }
}

console.log(updateCity(sampleContacts,1,"Johansburg"))
console.log(updateCity(sampleContacts, 3, "Multan"))
console.log(updateCity(sampleContacts, 99, "Multan"))
console.log(sampleContacts[2].city)