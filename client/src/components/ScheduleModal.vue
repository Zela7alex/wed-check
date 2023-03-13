<template>
  <div>
    <table class="table">
      <p @click="$emit('close')">x</p>
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Itinerary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" id="time">8:00 AM</th>
          <td>
            <ul>
              <li>Have Breakfast</li>
              <li>Double check all materials</li>
              <li>Shower etc.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">9:00 AM</th>
          <td>
            <ul>
              <li>Pick up white table from Dads</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">10:00 AM</th>
          <td>
            <ul>
              <li>Call Busses/Chairs to confirm</li>
              <li>Pick up Flower Bouquets</li>
              <li>Pick up Pastries</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">11:00 AM</th>
          <td>
            <ul>
              <li>Go to Ballroom</li>
              <li>Set up centerpieces</li>
              <li>Set up gift/pastry tables</li>
              <li>Make sure all materials present</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">12:00 PM</th>
          <td>
            <ul>
              <li>Pick up flower Bouqets</li>
              <li>Pick up Ice/Water Gallons</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">1:00 PM</th>
          <td>
            <ul>
              <li>Alex Hair & Makeup</li>
              <li>Photos/videos getting ready</li>
              <li>Photos of bridesmaids/groomsmen</li>
              <li>Helpers should be getting hair & makeup done</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">2:00 PM</th>
          <td>
            <ul>
              <li>Go to park and start setup</li>
              <li>Speakers/mic sound-check</li>
              <li>Flowers/aisle setup</li>
              <li>Helpers finish getting dressed</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">3:00 PM</th>
          <td>
            <ul>
              <li>Chairs Arriving</li>
              <li>Music Begins</li>
              <li>Guests start Arriving</li>
              <li>Bridal Party arriving</li>
              <li>Minister Arriving</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">4:00 PM</th>
          <td>
            <ul>
              <li>Ceremony Begins</li>
              <li>Bidal Party walks-in</li>
              <li>Bride Walks-in</li>
              <li>Sand-ceremony</li>
              <li>Vows Spoken</li>
              <li>Photos of Bride & Groom</li>
              <li>Everything packed in truck</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">5:00 PM</th>
          <td>
            <ul>
              <li>Reception Begins</li>
              <li>Cocktails/Pastries</li>
              <li>Bridal Party walk-in</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.table {
  width: 100%;
  font-size: 11px;
  text-align: center;
  background: rgba(213, 202, 186, 0.4);
  border: 1px solid white;
  border-radius: 15px;
  color: rgb(89, 130, 133);
  padding: 30px 7px 0 7px;
  position: relative;
}
p {
  background-color: rgb(199, 195, 185);
  width: 16px;
  border-radius: 25px;
  position: absolute;
  right: 6%;
  top: 0.5%;
  cursor: pointer;
  margin-top: 2px;
}
p:hover {
  background-color: rgb(230, 221, 209);
  color: rgb(22, 59, 59);
  animation-duration: 0.8;
}
ul {
  width: 170px;
}
li {
  width: 150px;
}
th {
  background-color: rgb(149, 188, 189, 0.5);
  padding: 0px 3px;
}
td {
  background-color: rgb(179, 205, 205);
}
li:nth-of-type(odd) {
  background: rgba(244, 242, 235, 0.5);
}
li:nth-of-type(even) {
  background: rgba(200, 222, 223, 0.5);
}
</style>
