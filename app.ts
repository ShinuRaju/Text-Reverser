const select =  (el:string, all:boolean = false) => {
    
    el = el.trim();
    let element:any;

    if (all){
        element = Array.from(document.querySelectorAll(el));
    }
    else{
        element = document.querySelector(el)
    }

    if(element === null || element === undefined ||  element.length === 0){
        console.log('elelement not found    ')
    }else{
        return (element)
    }
}


let inputText = select('#inputText');
let reverseText = select('#reverseText');
let checkBox = select('#check1');

let checked:boolean = true;


let reversedFunction = (n:string, lineByLine:boolean) => {
    let textValue = n;
    let revValue;
    if (!lineByLine) {
       revValue =   textValue.split('').reverse().join('')  ;
        

    } else {
        revValue  =   textValue.split(/\n/).map((echEle) => {
            return ( echEle.split('').reverse().join('') )
        }).join('\n') 
    }
    return revValue
}

let inputFunction = () => {
    let values =  inputText.value;
    reverseText.value = reversedFunction(values, checked);
}

inputText.addEventListener('input', () => {
    inputFunction()
})

let gettingValue = (e:any) => {
    checked = e.target.checked;
    inputFunction();
}


checkBox.addEventListener('change', (e:any) => {
    gettingValue(e)
})





