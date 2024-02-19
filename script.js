const totalSeats = 40;
let seatsSelected = 0;
let seatsId = [];
let seatsName = [];
const seats = document.querySelectorAll('.seat');
const selectedSeatsContainer = document.getElementById('selected-seat-container');
const totalSelectedSeatsId = document.getElementById('total-selected-seats');

let totalPrice = 0;
const totalPriceId = document.getElementById('total-price');

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    //console.log(seat);
    seat.addEventListener('click', function (event) {
        // const title = seat.querySelector('').innerText
        const id = seat.getAttribute('id');
        const element = document.getElementById(id);
        const seatName = element.innerText;

        if (!seatsId.includes(id)) {
            if (seatsSelected < 4) {
                // add items as selected seats
                seatsId.push(id);
                seatsName.push(seatName);
                element.style.cssText = "background-color:rgb(29, 209, 0); color:white";
                seatsSelected++;

                //total price
                totalPrice += 550;

                // create element
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="w-full flex justify-between">
                    <div>${seatName}</div>
                    <div>Economic</div>
                    <div>550Tk</div>
                </div>
                `;
                selectedSeatsContainer.appendChild(div);

            } else {
                alert("Maximum number of seat can be selected are: 4.");
            }

        } else {
            // remove items from selected seats
            let tempIndex = seatsId.indexOf(id);
            selectedSeatsContainer.removeChild(selectedSeatsContainer.childNodes[tempIndex + 1]);

            if (tempIndex != -1) {
                seatsId.splice(tempIndex, 1);
                seatsName.splice(tempIndex, 1);
            }
            // change deselected style
            element.style.cssText = "background-color:rgb(247, 248, 248); color:rgba(3, 7, 18, 0.5);";
            seatsSelected--;

            //total price
            totalPrice -= 550;
        }
        totalSelectedSeatsId.innerText = seatsSelected;
        document.getElementById('available-seat').innerText = (totalSeats - seatsSelected);
        totalPriceId.innerText = totalPrice;

        // console.log(seatsId, seatsName);
        // console.log(seatsId, seatsSelected);

        //title
        // const title = element.innerText;
        // console.log(title);


    });
}
