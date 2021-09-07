const question = {
    1:'你是如何理解 HTML 语义化的？',
    2:'meta viewport 是做什么用的，怎么写？',
    3:'你用过哪些 HTML 5 标签？',
    4:'H5 是什么？',
    5:'两种盒模型分别说一下',
    6:'如何垂直居中？',
    7:'flex 怎么用，常用属性有哪些？',
    8:'BFC 是什么？',
    9:'CSS 选择器优先级',
    10:'清除浮动说一下'
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
let arr = [];
function random(){
    let num = getRandomIntInclusive(1,10);
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === num){
            random();
            return;
        }
    }
    arr.push(num);
    console.log(question[num]);
}
let next = document.getElementById('next');
next.addEventListener('click', random);

//改进：
//不要让题目重复
