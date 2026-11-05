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


let contacts = [];

let addContact = (list,contact) => {
    const idStatus = list.some(elem => elem.id === id)
    if(idStatus) {
        return "Contact ID already exists"
    } else if(!contact.name){
        return "Contact name is empty"
    } 
    else {
        console.log("else running")
        const newList = [{...contact}]                          
        return newList
    }
}

contacts1 = addContact(contacts, { id: 1, name: "Asha", phone: "9876543210" });
console.log(contacts)
console.log(contacts1)


