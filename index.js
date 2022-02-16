/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem,str){
    elem.textContent = str
}

function addTextTo(elem,str){
    elem.textContent=elem.textContent+str
}

function moreBears(){
    const animals=document.querySelector("#animals")
    animals.src = "http://placebear.com/400/200"
    animals.alt = "A bear."
    animals.title = "A BEAR!"
}

function setId(elem,str){
    elem.id=str
    return elem
}

function setClass(elem,str){
    elem.className=str
    return elem
}

function addAClass(elem,str){
    elem.classList.add(str)
    return elem
}

function removeAClass(elem,str){
    elem.classList.remove(str)
    return elem
}

function newElement(name){
    const element1=document.createElement(name)
    return element1
}

function findElementById(id){
    return document.getElementById(id)
}

function findElementsByQuery(query){
    return document.querySelectorAll(query)
}

function reverseList(query){
    let list = document.querySelector(query)
    // stores length of list as a variable
    let i = list.children.length
    // list is appended based on value of i (i is descending)
    while (i--){
        list.appendChild(list.children[i])
    }
    return list

}

function mover(moveThis,appendToThis){
    const moveme = document.querySelector(moveThis)
    const listtwo = document.querySelector(appendToThis)
    listtwo.append(moveme)
}

function filler(list,candidates){
    candidates.forEach((item)=>{
        let listitem = document.createElement("li")
        listitem.textContent=item
        list.appendChild(listitem)
    })
}

function dupe(selector){
    let dupeme=document.querySelector(selector)
    let duplicate=document.createElement('p')
    duplicate.textContent=dupeme.textContent
    dupeme.parentElement.append(duplicate)
}

function removeAll(selector){
    document.querySelectorAll(selector).forEach(element => element.remove())
}

function getUserData(){
    let object={}
    object.name=document.querySelector("#username").value
    object.speed=parseInt(document.querySelector("#speed").value)
    if(document.querySelector("#student").checked){
        object.student=true
    } else{
        object.student=false
    }
    return object
}