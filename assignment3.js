function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}

function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500);
    return total; 
}

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else {
        var first10Days = 10 * 100;
        var remainingDays = day - 10;
        cost = first10Days + remainingDays;
    }
    return cost;
}

function megaFriend(friend) {
    var max = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
        if (element.length > max.length) {
            max = elements;
        }
    }
    return max;
}