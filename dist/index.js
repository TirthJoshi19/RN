document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#menuSvg');
  const sideMenu = document.querySelector('.sidebar');
  menuIcon.addEventListener('click', () => {
    sideMenu.style.display = 'block';
  });

  const closeIcon = document.querySelector('.li-icon');
  closeIcon.addEventListener('click', () => {
    sideMenu.style.display = 'none';
  });
});
let showDivRunning;

const infoDiv = document.querySelector('.information');
const infoContainer = document.querySelector('.product-info');
function showInfoDiv() {
  const parent = document.querySelector('.product-info');
  const childDivs = parent.querySelectorAll('div');
  const img = parent.querySelector('img');
  infoDiv.style.display = 'block';
  childDivs.forEach((childDiv) => {
    if (
      childDiv.classList.contains('information') ||
      childDiv.classList.contains('product-info')
    ) {
      return;
    } else {
      childDiv.style.display = 'none';
      img.style.display = 'none';
      infoContainer.classList.add('info-container');
      const img2 = document.querySelector('#img2');
      img2.style.display = 'none';
      const companyH1 = document.querySelector('#company-vision-h1');
      companyH1.style.marginTop = '10%';
    }
  });
}

const btn = document.querySelector('#backBtn');
btn.addEventListener('click', () => {
  location.reload();
});

const listItems = document.querySelectorAll('li');
listItems.forEach((listItem) => {
  const a = listItem.querySelector('a');
  listItem.addEventListener('mouseover', () => {
    a.style.color = 'white';
  });
  listItem.addEventListener('mouseout', () => {
    a.style.color = '#333';
  });
});
