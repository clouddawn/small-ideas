const app = document.querySelector("#app");
const div1 = document.createElement("div");
div1.innerHTML = `<img src="./images/01.png">`;
const div2 = document.createElement("div");
div2.innerHTML = `<img src="./images/02.png">`;
const div3 = document.createElement("div");
div3.innerHTML = `<img src="./images/03.png">`;
const div4 = document.createElement("div");
div4.innerHTML = `<img src="./images/04.png">`;
const div5 = document.createElement("div");
div5.innerHTML = `<img src="./images/05.png">`;
const div6 = document.createElement("div");
div6.innerHTML = `<img src="./images/06.png">`;
const div7 = document.createElement("div");
div7.innerHTML = `<img src="./images/07.png">`;
const div8 = document.createElement("div");
div8.innerHTML = `<img src="./images/08.png">`;

const routeTable = {
    "1":div1,
    "2":div2,
    "3":div3,
    "4":div4,
    "5":div5,
    "6":div6,
    "7":div7,
    "8":div8
};
let number;
function route(container){
    number = window.location.hash.substr(1);
    number = number || 1;
    // 获取界面
    let div = routeTable[number.toString()];
    if(!div){
        div = document.querySelector("#div404");
    }
    div.style.display = "block";
    // 展示界面
    container.innerHTML = "";
    container.appendChild(div);
}

route(app);

window.addEventListener("hashchange",()=>{
    console.log("hash 变了");
    route(app);
});
