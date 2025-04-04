const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const content = {
  chicken: `
    <h2>These are drop down menus now, click the "►" below to see the images</h2>

    <button class="accordion">Bunker Chicken (scans as A31)</button>
    <div class="panel">
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/40poundchicken.png" alt="40 pound boxes of beef and chicken" />
      <p>40 pound boxes of beef and Chicken</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/beef%20turkey%20rolls.png" alt="Beef/Turkey Rolls" />
      <p>Beef/Turkey Rolls</p>
      <img src="https://github.com/clubwallytraining/Frozen-Downstacking/raw/main/resources/misplaced%20boxes/Bunker%20Chicken/topchick.png" alt="Top Chick" />
      <p>Top Chick</p>
    </div>

    <button class="accordion">Apps (NOT 40lb boxes of Bunker Chicken Wings)</button>
    <div class="panel">
      <img src="assets/apps_1.jpg" alt="Wyngz" />
      <p>Wyngz</p>
      <img src="assets/apps_2.jpg" alt="Chicken Bites" />
      <p>Chicken Bites</p>
      <img src="assets/apps_3.jpg" alt="Popcorn Chicken" />
      <p>Popcorn Chicken</p>
    </div>

    <button class="accordion">A4 Chicken</button>
    <div class="panel">
      <img src="assets/a4chicken_1.jpg" alt="Chicken Strips" />
      <p>Chicken Strips</p>
      <img src="assets/a4chicken_2.jpg" alt="Chicken Nuggets" />
      <p>Chicken Nuggets</p>
      <img src="assets/a4chicken_3.jpg" alt="Chicken Patties" />
      <p>Chicken Patties</p>
    </div>
  `,

  missed: `
    <h2>Common Misplaced Boxes</h2>

    <button class="accordion">Breakfast Items</button>
    <div class="panel">
      <img src="assets/breakfast_miss_1.jpg" alt="Breakfast Burritos" />
      <p>Breakfast Burritos (belongs in A6 13–23)</p>
    </div>

    <button class="accordion">Seafood Confusion</button>
    <div class="panel">
      <img src="assets/seafood_miss_1.jpg" alt="Shrimp Tempura" />
      <p>Shrimp Tempura (belongs in Seafood)</p>
    </div>

    <button class="accordion">Top Chick Placement</button>
    <div class="panel">
      <img src="assets/topchick_miss.jpg" alt="Top Chick" />
      <p>Top Chick should be placed with Bunker Chicken (A31)</p>
    </div>
  `,

  features: `
    <h2>Feature Pallets</h2>

    <button class="accordion">Uncrustables</button>
    <div class="panel">
      <img src="assets/uncrustables_feature.jpg" alt="Uncrustables stacked incorrectly" />
      <p>Often misstacked. Place separately from regular freight.</p>
    </div>

    <button class="accordion">Separation Reminder</button>
    <div class="panel">
      <p>Always separate feature quantity onto their own pallet and place them in the freezer to downstack on later.</p>
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

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    toggleBtn.innerText = 'Light Theme';
  } else {
    toggleBtn.innerText = 'Dark Theme';
  }
}


