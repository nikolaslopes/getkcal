const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity_level');
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex];
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
