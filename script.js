const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const content = {
  chicken: `
    <h2>These are drop down menus now, click the button below to see the images</h2>

    <button class="accordion">Bunker Chicken (scans as A31)</button>
    <div class="panel">
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/40poundchicken.png" alt="40 pound boxes of beef and chicken" />
      <p>40 pound boxes of beef and Chicken</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/beef%20turkey%20rolls.png" alt="Beef/Turkey Rolls" />
      <p>Beef/Turkey Rolls</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/topchick.png" alt="Top Chick" />
      <p>Top Chick</p>
    </div>

    <button class="accordion">Apps</button>
    <div class="panel">
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Apps/Wyngz.png" alt="Wyngz" />
      <p>Wyngz</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Apps/tyson%20bites.png" alt="Chicken Bites" />
      <p>Chicken Bites</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Apps/tyson%20chicken%20fries.png" alt="Popcorn Chicken" />
      <p>Popcorn Chicken</p>
    </div>

    <button class="accordion">A4 Chicken</button>
    <div class="panel">
      <p>Chicken Strips</p>
      
      <p>Chicken Nuggets</p>
      
      <p>Chicken Patties</p>
    </div>
  `,

  missed: `
    <h2>Common Misplaced Boxes</h2>

    <button class="accordion">Deli</button>
    <div class="panel">
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Deli/Kings%20Hawaiian.png" alt="King Hawaiian Rolls" />
      <p>King Hawaiian rolls</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Deli/Pita%20Bread.png" alt="Greek Style Pita" />
      <p>Greek Style Pita</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Deli/Sweet%20Baked%20Goods.png" alt=" Sweet Baked Goods" />
      <p>Sweet Baked Goods</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Deli/St%20Pierre%20Waffles.png" alt="Belgian Waffles" />
      <p>Belgian Waffles</p>
    </div>

    
  `,

  features: `
    <h2>Feature Pallets</h2>

    <button class="accordion">Features</button>
    <div class="panel">
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/feature%20pallet.png" alt="Features Pallets" />
      <p>Please separate from regular freight onto a separate pallet.</p>
    </div>

    
  `
};


function openModal(type) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = content[type] || "<p>Content not found.</p>";
}

function closeModal() {
  modal.classList.add('hidden');
}

function enableDropdowns() {
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

function openModal(type) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = content[type] || "<p>Content not found.</p>";
  enableDropdowns();
}

//function toggleTheme() {
  //const body = document.body;
  //const toggleBtn = document.getElementById('themeToggle');
  //body.classList.toggle('dark');

 // if (body.classList.contains('dark')) {
    //toggleBtn.innerText = 'Light Theme';
 // } else {
   // toggleBtn.innerText = 'Dark Theme';
 // }
//}


