const totalSeats = 40;
let seatsSelected = 0;
let seatsId = [];
const seats = document.querySelectorAll('.seat');
for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    //console.log(seat);
    seat.addEventListener('click', function (event) {
        // const title = seat.querySelector('').innerText
        const id = seat.getAttribute('id');
        const element = document.getElementById(id);

        if (!seatsId.includes(id)) {
            if (seatsSelected < 4) {
                // add items as selected seats
                seatsId.push(id);
                element.style.cssText = "background-color:rgb(29, 209, 0); color:white";
                seatsSelected++;
            } else {
                alert("Maximum number of seat can be selected are: 4.");
            }

        } else {
            // remove items from selected seats
            let tempIndex = seatsId.indexOf(id);
            if (tempIndex != -1) {
                seatsId.splice(tempIndex, 1);
            }
            // change deselected style
            element.style.cssText = "background-color:rgb(247, 248, 248); color:rgba(3, 7, 18, 0.5);";
            seatsSelected--;
        }
        document.getElementById('total-selected-seats').innerText = seatsSelected;
        document.getElementById('available-seat').innerText = (totalSeats - seatsSelected);
        // console.log(seatsId, seatsSelected);

        //title
        // const title = element.innerText;
        // console.log(title);


    });
}
