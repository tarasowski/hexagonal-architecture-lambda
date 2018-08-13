module.exports = (number, saveToDatabase) => {
    const result = number * number
    const response = saveToDatabase(result) // port to the database that get's injected
    return response
}

// APPLICATION/BUSINESS LOGIC: does all the hardcore calculation or where the value of the software is
