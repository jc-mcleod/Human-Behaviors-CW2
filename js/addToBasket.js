// Prab - Adding working 'Add to basket' button
function addToBasket(id,bm) {
    
    const movie2 = movies.find((movie2) => movie2.id === id);
    // Get the basket from local storage, or just an empty array if it doesn't exist
    const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

    // Check if movie is in basket
    var new_bask = true;
    var index = 0;
    new_bask = basket.every((i) => {
        //console.log("i.id:" + i.id);
        //console.log(index);
        //if (i.id == id) {
        //    new_bask = false;
        //    real_index = index;
        //    console.log("return");
        //    return;
        //}
        index++;
        return i.id != id;
        
    });
    console.log("id:" + id);
    index--;
    var max_rent = 365
    if (bm == "b") {
        var rent_to_add = parseInt(document.getElementById("days-to-rent" + id).value)
    } else {
        var rent_to_add = parseInt(document.getElementById("days-to-rent").value)
    }
    //Add movie to basket if it is not there already
    //try {
        if (new_bask == true && rent_to_add <= max_rent && rent_to_add >= 0) {
            movie2.rentDays = rent_to_add;
            basket.push(movie2);
            window.alert("Added to Basket")
            // Add on rent days to basket if movie is already in basket
        } else if (new_bask == false && basket[index].rentDays + rent_to_add <= max_rent && rent_to_add >= 0) {
            basket[index].rentDays += rent_to_add;
            window.alert("Updated Basket")
            //Notify user that they cannot rent a movie more than specified number of days
        } else if (rent_to_add > max_rent && rent_to_add >= 0) {
            window.alert("Maximum number of days you can rent is " + max_rent);
        }
        else if (basket[index].rentDays + rent_to_add > max_rent && rent_to_add >= 0) {
            window.alert("Maximum number of days you can rent is " + max_rent);
        } else {
            window.alert("Only Positive Integers Allowed");
            console.log("test");
        }
    //} catch (TypeError) {
    //    window.alert("Only Positive Integers Allowed");
    //    console.log("test2");
    //}

    localStorage.setItem("basket", JSON.stringify(basket));
}