localStorage.clear();
let error = ''

function validateForm() {
    const isNameOk = validateName()
    const isLastNameOk = validateLastName()
    const isEventOk = validateEvent()
    const isLocationOk = validateLocation()
    const isNameEventOk = validateNameEvent()
    const isVisitorsOk = validateVisitors()
    const isDateOk = validateDate()
    const isTimeOk = validateTime()
    const isDescriptionOk = validateDescription()

    if (isNameOk && isLastNameOk && isEventOk && isLocationOk && isNameEventOk && isVisitorsOk && isDateOk && isTimeOk && isDescriptionOk) {
        getForm()
    } else {
        alert(error)
    }
}

// get element and set it to local storage
function validateName() {
    let name = document.getElementById('name').value

    if (name) {
        setElementToLocalStorage('Name', name)
        return true
    } else {
        error = 'Унесите име'
        return false
    }
}

function validateLastName() {
    let lastName = document.getElementById('last-name').value

    if (lastName) {
        setElementToLocalStorage('Last Name', lastName)
        return true
    } else {
        error = 'Унесите презиме'
        return false
    }
}

function validateEvent() {
    let event = document.getElementById('event').value

    if (event != "wrong") {
        setElementToLocalStorage('Event', event)
        return true
    } else {
        error = 'Изаберите догађај'
        return false
    }
}

function validateLocation() {
    let location = document.getElementById('location').value

    if (location != "wrong") {
        setElementToLocalStorage('Location', location)
        return true
    } else {
        error = 'Изаберите локацију'
        return false
    }
}

function validateNameEvent() {
    let nameEvent = document.getElementById('name-event').value

    if (nameEvent) {
        setElementToLocalStorage('NameEvent', nameEvent)
        return true
    } else {
        error = 'Унесите назив догађаја'
        return false
    }
}

function validateVisitors() {
    let visitors = document.getElementById('visitors').value

    if ( visitors != "" && !(isNaN(visitors))) {
            setElementToLocalStorage('Visitors', visitors)
            return true
        }
    else {
        error = 'Унесите број посетилаца'
        return false
    }
}
function validateDate() {
    let date = document.getElementById('date').value

    if (date) {
        setElementToLocalStorage('Date', date)
        return true
    } else {
        error = 'Унесите датум'
        return false
    }
}
function validateTime() {
    let time = document.getElementById('time').value

    if (time) {
        setElementToLocalStorage('Time', time)
        return true
    } else {
        error = 'Унесите време'
        return false
    }
}
function validateDescription() {
    let description = document.getElementById('description').value

    if (description) {
        setElementToLocalStorage('Description', description)
        return true
    } else {
        error = 'Унесите кратак опис догађаја'
        return false
    }
}


// globalna funcija za ubacivanje u local storage
function setElementToLocalStorage(element, value) {
    localStorage.setItem(element, JSON.stringify(value))
}
// globalna funckija za vracanje iz local storage 
function getElementFromLocaleStorage(element) {
    return localStorage.getItem(element)
}

function getForm() {
    addNewName()
    addNewLastName()
    addNewEvent()
    addNewLocation()
    addNewNameEvent()
    addNewVisitors()
    addNewDate()
    addNewTime()
    addNewDescription()
}

function addNewName() {
    let newName = document.createTextNode(getName())

    document.getElementById('new-name').appendChild(newName)
}

function getName() {
    let name = 'Име: ' + JSON.parse(getElementFromLocaleStorage('Name'))

    // ovo je clasican if else https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    return name ? name : 'No Name Found'
}

function addNewLastName() {
    let newLastName = document.createTextNode(getLastName())

    document.getElementById('new-last-name').appendChild(newLastName)
}

function getLastName() {
    let lastName = 'Презиме: ' + JSON.parse (getElementFromLocaleStorage('Last Name'))

    return lastName ? lastName : 'No Last Name Found'
}

function addNewEvent() {
    let newEvent = document.createTextNode(getEvent())

    document.getElementById('new-event').appendChild(newEvent)
}

function getEvent() {
    let event = 'Догађај: ' + JSON.parse (getElementFromLocaleStorage('Event'))

    return event ? event : 'No Event Found'
}

function addNewLocation() {
    let newLocation = document.createTextNode(getLocation())

    document.getElementById('new-location').appendChild(newLocation)
}

function getLocation() {
    let location = 'Локација: ' + JSON.parse (getElementFromLocaleStorage('Location'))

    return location ? location : 'No Location Found'
}

function addNewNameEvent() {
    let newNameEvent = document.createTextNode(getNameEvent())

    document.getElementById('new-name-event').appendChild(newNameEvent)
}

function getNameEvent() {
    let nameEvent = 'Назив догађаја: ' + JSON.parse (getElementFromLocaleStorage('NameEvent'))

    return nameEvent ? nameEvent : 'No Name Event Found'
}

function addNewVisitors() {
    let newVisitors = document.createTextNode(getVisitors())

    document.getElementById('new-visitors').appendChild(newVisitors)
}

function getVisitors() {
    let visitors = 'Број посетилаца: ' + JSON.parse (getElementFromLocaleStorage('Visitors'))

    return visitors ? visitors : 'No Visitors Found'
}
function addNewDate() {
    let newDate = document.createTextNode(getDate())

    document.getElementById('new-date').appendChild(newDate)
}

function getDate() {
    let date = 'Датум: ' + JSON.parse (getElementFromLocaleStorage('Date'))

    return date ? date : 'No Date Found'
}
function addNewTime() {
    let newTime = document.createTextNode(getTime())

    document.getElementById('new-time').appendChild(newTime)
}

function getTime() {
    let time = 'Време: ' + JSON.parse (getElementFromLocaleStorage('Time'))

    return time ? time : 'No Time Found'
}
function addNewDescription() {
    let newDescription = document.createTextNode(getDescription())

    document.getElementById('new-description').appendChild(newDescription)
}

function getDescription() {
    let description = 'Опис догађаја: ' + JSON.parse (getElementFromLocaleStorage('Description'))

    return description ? description : 'No Description Found'
}
