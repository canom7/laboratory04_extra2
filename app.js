roomPrices = {
    standard: 100,
    juniorSuite: 120,
    suite: 150
}

parkingPrices = {
    car: 10
}

var getNumberNights = () => document.getElementById("nights-reservation").value;

function getRoomPrice(){
    var roomType = document.getElementById("room-type").value;
    switch(roomType){
        case "Standard":
            roomPrice = roomPrices.standard;
            break;
        case "Junior Suite":
            roomPrice = roomPrices.juniorSuite;
            break;
        case "Suite":
            roomPrice = roomPrices.suite;
            break;
    } 
    totalRoom= roomPrice * getNumberNights();
    return totalRoom;
}

var getPriceSpa = () => document.getElementById("access-spa").checked ? totalRoom = totalRoom + (20 * getNumberNights()) : totalRoom = totalRoom;

function getRoomOccupancy(){
    var roomOccupancy = document.getElementById("room-occupancy").value;
    switch(roomOccupancy){
        case "Single":
            totalRoom = totalRoom - (totalRoom * 0.25);
            break;
        case "Triple":
            totalRoom = totalRoom + (totalRoom * 0.25);
            break;
    } 
    return totalRoom;
}

function getParkingPrice(){
    var numberDaysParking = document.getElementById("nights-parking").value;
    var parkingPrice = numberDaysParking * parkingPrices.car;
    totalRoom = totalRoom + parkingPrice;
    return totalRoom;
}

function printResult(){
    document.getElementById("result").innerHTML= "Total Price = " + totalRoom + "€";
}

function calculateTotal(){
    getRoomPrice();
    getPriceSpa();
    getRoomOccupancy();
    getParkingPrice();
    printResult();
}

//EVENT
document.getElementById("button-calculate").addEventListener("click", calculateTotal);


