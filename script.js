const totalSeats = 40;
let seatsSelected = 0;
let seatsId = [];
let seatsName = [];
const selectedSeatsContainer = document.getElementById('selected-seat-container');
const totalSelectedSeatsId = document.getElementById('total-selected-seats');

// disabled 'next' button
const nextButton = document.getElementById('next-btn');
nextButton.setAttribute('disabled', true);

let grandTotal = 0;
const grandTotalId = document.getElementById('grand-total');

let totalPrice = 0;
const totalPriceId = document.getElementById('total-price');

const seats = document.querySelectorAll('.seat');
let isDiscounted = false;

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    //console.log(seat);
    seat.addEventListener('click', function (event) {

        if (!isDiscounted) {
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
                    // enabled 'next' button
                    // nextButton.removeAttribute('disabled');

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
            grandTotal = totalPrice;
            grandTotalId.innerText = totalPrice;
        } else {
            alert('Ticket price already discount. Please, reload our webpage again.');
        }

    });
}
const couponSec = document.getElementById('coupon-section');

const discountId = document.getElementById('total-discount');
let discountAmount = 0;

const discountInput = document.getElementById('discount-input');
let inputData = "";
discountInput.addEventListener('keyup', function (event) {
    inputData = event.target.value;
});

const discountBtn = document.getElementById('discount-btn');
discountBtn.addEventListener('click', function () {
    if (inputData === 'NEW15') {
        discountAmount = totalPrice * 0.15;
        isDiscounted = true;
    } else if (inputData === 'Couple 20') {
        discountAmount = totalPrice * 0.20;
        isDiscounted = true;
    }
    if (isDiscounted) {
        grandTotal = totalPrice - discountAmount;
        discountId.innerText = discountAmount;
        grandTotalId.innerText = grandTotal;
        couponSec.style.display = 'none';
    }
});


nextButton.addEventListener('click', function () {
    if (grandTotal == 0) {
        alert('please select a seat first');
    }
});

const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function () {
    window.location.reload();
});
