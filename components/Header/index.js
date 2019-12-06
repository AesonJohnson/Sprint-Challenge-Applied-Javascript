// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    header = document.createElement('div');
    headerDate = document.createElement('span');
    headerTitle = document.createElement('h1');
    headerTemp = document.createElement('span');

    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = 'SMARCH 28, 2019';
    headerTitle.textContent = 'LambdaTimes';
    headerTemp.textContent = '98°';

    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerTemp);

    return header;
}

const headContainer = document.querySelector('.header-container');
headContainer.appendChild(headerMaker());