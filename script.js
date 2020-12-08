var data = [
    {
        "id": 1,
        "color": "#000",
    },
    {
        "id": 2,
        "color": "#333",
    },
    {
        "id": 3,
        "color": "#2B8EAD",
    },
    {
        "id": 4,
        "color": "#6F98A8",
    },
    {
        "id": 5,
        "color": "#2B8EAD",
    },
    {
        "id": 6,
        "color": "#BFBFBF",
    },
    {
        "id": 7,
        "color": "#2B8EAD",
    },
    {
        "id": 8,
        "color": "#2F454E",
    },
    {
        "id": 9,
        "color": "#72C3DC",
    }
]
var container = document.getElementById('data-holder');
function dataLoad() {
    window.onresize = modifyStyle;
    constructDivs(data);

    function modifyStyle() {
        let screenWidth = window.innerWidth;
        let containerElem = document.getElementById('data-holder');
        if (screenWidth <= 375) {
            data.forEach((element, index) => {
                containerElem.childNodes[index].style.backgroundColor = '#CACACA';
                containerElem.childNodes[index].style.borderLeftWidth = '8px';
                containerElem.childNodes[index].style.borderLeftStyle = 'solid';
                containerElem.childNodes[index].style.borderLeftColor = element.color;
            })
        } else {
            data.forEach((element, index) => {
                containerElem.childNodes[index].style.backgroundColor = element.color;
                containerElem.childNodes[index].style.borderLeftWidth = '0';
                containerElem.childNodes[index].style.borderLeftStyle = '';
                containerElem.childNodes[index].style.borderLeftColor = '';
            });
        }
    }

    
}
dataLoad();

function constructDivs(data) {
    data.forEach(element => {
        let newElem = document.createElement('div');
        newElem.innerHTML = element.id;
        newElem.classList.add('item');
        newElem.style.backgroundColor = element.color;
        newElem.style.fontSize = "x-large";
        container.appendChild(newElem);
    })
}

function shuffleData() {
    let containerElem = document.getElementById('data-holder');
    containerElem.innerHTML = '';
    let ElementData = data;
    let shuffleData = ElementData.sort(() => Math.random() - 0.5);
    constructDivs(shuffleData);
}

function sortData() {
    let containerElem = document.getElementById('data-holder');
    containerElem.innerHTML = '';
    let ElementData = data;
    let sortData = ElementData.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
    constructDivs(sortData);
}