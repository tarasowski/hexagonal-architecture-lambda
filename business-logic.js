module.exports = (number, saveNewValue) => {
    const result = number * number
    const response = saveNewValue(result) // port to the database that get's injected
    return response
}

// APPLICATION/BUSINESS LOGIC: does all the hardcore calculation or where the value of the software is
