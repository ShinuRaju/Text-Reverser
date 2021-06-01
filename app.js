"use strict";
var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('elelement not found    ');
    }
    else {
        return (element);
    }
};
var inputText = select('#inputText');
var reverseText = select('#reverseText');
var checkBox = select('#check1');
var checked = true;
var reversedFunction = function (n, lineByLine) {
    var textValue = n;
    var revValue;
    if (!lineByLine) {
        revValue = textValue.split('').reverse().join('');
    }
    else {
        revValue = textValue.split(/\n/).map(function (echEle) {
            return (echEle.split('').reverse().join(''));
        }).join('\n');
    }
    return revValue;
};
var inputFunction = function () {
    var values = inputText.value;
    reverseText.value = reversedFunction(values, checked);
};
inputText.addEventListener('input', function () {
    inputFunction();
});
var gettingValue = function (e) {
    checked = e.target.checked;
    inputFunction();
};
checkBox.addEventListener('change', function (e) {
    gettingValue(e);
});
