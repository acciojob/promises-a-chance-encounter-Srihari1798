// Generate five <div> elements with IDs
for (let i = 1; i <= 5; i++) {
  const div = document.createElement('div');
  div.id = `div-${i}`;
  document.body.appendChild(div);
}
// Check that there are five <div> elements with IDs
for (let i = 1; i <= 5; i++) {
  cy.get(`#div-${i}`).should('exist');
}
