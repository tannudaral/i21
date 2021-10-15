const event1 = document.querySelector('.event--1');
const displayField = document.querySelector('.last__field');

event1.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "Escape Room";  // event name goes here
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>  <!-- dynamic - name -->
    <input type="text" name="teamName" placeholder="Team Name" required />
    <input type="text" name="noOfTeamMembers" placeholder="Number of Team Members" required />
    <p>Please select your preferred time slot:</p>
    <input type="radio" id="timeSlot1" name="time_slot" value="11 AM - 12 PM" required>
    <label for="timeSlot1">11 AM - 12 PM</label><br>
    <input type="radio" id="timeSlot2" name="time_slot" value="12:15 AM - 1:15 PM" required>
    <label for="timeSlot2">12:15 AM - 1:15 PM</label><br>
    <input type="radio" id="timeSlot3" name="time_slot" value="1:45 PM - 2:45 PM" required>
    <label for="timeSlot3">1:45 PM - 2:45 PM</label><br>
    <input type="radio" id="timeSlot4" name="time_slot" value="3 PM - 4 PM" required>
    <label for="timeSlot4">3 PM - 4 PM</label><br>
    <input type="radio" id="timeSlot5" name="time_slot" value="4 PM - 5 PM" required>
    <label for="timeSlot5">4 PM - 5 PM</label>
    <input type="text" name="pname" placeholder="Name (Participant 1 - Team Leader)" required />
    <input type="text" name="email" placeholder="E-mail ID (Participant 1)" required/>
    <input type="text" name="contact" placeholder="Contact No. (Participant 1)" required />
    <input type="text" name="college" placeholder="College/School (Participant 1)" required />
    <input type="text" name="pname" placeholder="Name (Participant 2)" required />
    <input type="text" name="email" placeholder="E-mail ID (Participant 2)" required />
    <input type="text" name="contact" placeholder="Contact No. (Participant 2)" required />
    <input type="text" name="college" placeholder="College/School (Participant 2)" required />
    <input type="text" name="pname" placeholder="Name (Participant 3)" />
    <input type="text" name="email" placeholder="E-mail ID (Participant 3)" />
    <input type="text" name="contact" placeholder="Contact No. (Participant 3)" />
    <input type="text" name="college" placeholder="College/School (Participant 3)" />
    <input type="text" name="pname" placeholder="Name (Participant 4)" />
    <input type="text" name="email" placeholder="E-mail ID (Participant 4)" />
    <input type="text" name="contact" placeholder="Contact No. (Participant 4)" />
    <input type="text" name="college" placeholder="College/School (Participant 4)" />
    <input type="text" name="pname" placeholder="Name (Participant 5)" />
    <input type="text" name="email" placeholder="E-mail ID (Participant 5)" />
    <input type="text" name="contact" placeholder="Contact No. (Participant 5)" />
    <input type="text" name="college" placeholder="College/School (Participant 5)" />
    <input type ="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`
    displayField.insertAdjacentHTML('beforeend',html);

})

//modify each event according to the needs provided

const event2 = document.querySelector('.event--2');
const displayField = document.querySelector('.last__field');

event2.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "hey";
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`;
    displayField.insertAdjacentHTML('beforeend',html);

})


const event3 = document.querySelector('.event--3');
const displayField = document.querySelector('.last__field');

event3.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "hey";
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="pho-ne" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`;
    displayField.insertAdjacentHTML('beforeend',html);

})


const event4 = document.querySelector('.event--4');
const displayField = document.querySelector('.last__field');

event4.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "hey";
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`;
    displayField.insertAdjacentHTML('beforeend',html);

})


const event5 = document.querySelector('.event--5');
const displayField = document.querySelector('.last__field');

event5.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "hey";
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`;
    displayField.insertAdjacentHTML('beforeend',html);

})


const event6 = document.querySelector('.event--6');
const displayField = document.querySelector('.last__field');

event6.addEventListener('click', ()=> {
    console.log("working");
    const eventName = "hey";
    displayField.innerHTML = "";
    const html = `<h2 class="fs-title">Event Registration</h2>
    <h3 class="fs-subtitle">${eventName}</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />`;
    displayField.insertAdjacentHTML('beforeend',html);

})