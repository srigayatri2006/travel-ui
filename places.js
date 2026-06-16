// places.js

function showGuide(place){

  const guideContent =
  document.getElementById("guideContent");

  let content = "";

  if(place === "maldives"){

    content = `
      <h3>Maldives Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>Scuba Diving</li>
        <li>Snorkeling</li>
        <li>Luxury Resort Stay</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Male City</li>
        <li>Vaadhoo Island</li>
        <li>Sun Island</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Rahim - English Guide</option>
        <option>Ahmed - Adventure Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  else if(place === "swiss"){

    content = `
      <h3>Switzerland Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>Skiing</li>
        <li>Mountain Hiking</li>
        <li>Snowboarding</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Zurich</li>
        <li>Swiss Alps</li>
        <li>Lucerne</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Daniel - Hiking Guide</option>
        <option>John - Snow Sports Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  else if(place === "newyork"){

    content = `
      <h3>New York Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>City Tour</li>
        <li>Broadway Shows</li>
        <li>Shopping</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Times Square</li>
        <li>Central Park</li>
        <li>Statue of Liberty</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Emily - City Guide</option>
        <option>Michael - Food Tour Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  else if(place === "dubai"){

    content = `
      <h3>Dubai Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>Desert Safari</li>
        <li>Luxury Shopping</li>
        <li>Sky Diving</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Burj Khalifa</li>
        <li>Dubai Mall</li>
        <li>Palm Jumeirah</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Ali - Desert Safari Guide</option>
        <option>Sarah - Luxury Tour Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  else if(place === "paris"){

    content = `
      <h3>Paris Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>Museum Tours</li>
        <li>River Cruise</li>
        <li>Photography Tours</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Eiffel Tower</li>
        <li>Louvre Museum</li>
        <li>Notre Dame</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Sophie - Art Guide</option>
        <option>Lucas - City Tour Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  else if(place === "bali"){

    content = `
      <h3>Bali Guide</h3>

      <h4>Top Activities</h4>

      <ul>
        <li>Temple Visits</li>
        <li>Surfing</li>
        <li>Beach Relaxation</li>
      </ul>

      <h4>Places To Visit</h4>

      <ul>
        <li>Ubud</li>
        <li>Tanah Lot Temple</li>
        <li>Kuta Beach</li>
      </ul>

      <h4>Available Tourist Guides</h4>

      <select>
        <option>Wayan - Temple Guide</option>
        <option>Ketut - Surfing Guide</option>
      </select>

      <br>

      <button>Book Tourist Guide</button>
    `;
  }

  guideContent.innerHTML = content;
}