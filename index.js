// Code your solution here

function findMatching(drivers, string){
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(sa){
        return sa.startsWith(string)
    })
}

function matchName(drivers, name){
    return drivers.filter (function(driver){
        return driver.name === name
    })
}
    