const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const content = {
  chicken: `
    <h2>Chicken Info</h2>
    <p><strong>Bunker Chicken:</strong> A31 - goes with 40lb top chick, turkey, and bunker beef.</p>
    <p><strong>Apps Chicken:</strong> Bites, Wyngz, Popcorn Chicken - A5 (13–23)</p>
    <p><strong>A4 Chicken:</strong> Nuggets, Patties, Strips - A3 (15–23), A4 (17–23)</p>
  `,
  missed: `
    <h2>Common Misplaced Boxes</h2>
    <ul>
      <li>Top Chick → not with A4 or A5, goes with Bunker Chicken (A31)</li>
      <li>Breakfast Burritos → sometimes found in TV dinners, belongs in Breakfast A6 (13–23)</li>
      <li>Shrimp tempura → often misplaced in Chicken, belongs in Seafood</li>
    </ul>
  `,
  features: `
    <h2>Feature Pallets</h2>
    <p>Keep feature pallets separate from regular freight.</p>
    <p>Uncrustables often misstacked. Check labels before placing.</p>
  `
};

function openModal(type) {
  modal.classList.remove('hidden');
  modalBody.innerHTML = content[type] || "<p>Content not found.</p>";
}

function closeModal() {
  modal.classList.add('hidden');
}
