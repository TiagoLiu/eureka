const header = document.querySelector("header");
const modal = document.querySelector('.modal-container');
const modal2 = document.querySelector('.modal-container2');
const modal3 = document.querySelector('.modal-container3');
const modal4 = document.querySelector('.modal-container4');
const modal5 = document.querySelector('.modal-container5');
const modal6 = document.querySelector('.modal-container6');
const modal7 = document.querySelector('.modal-container7');
const modal8 = document.querySelector('.modal-container8');
const modal9 = document.querySelector('.modal-container9');

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY >0);
});

function openModal() {
    modal.classList.add('active')
};

function openModal2() {
    modal2.classList.add('active')
};

function openModal3() {
    modal3.classList.add('active')
};

function openModal4() {
    modal4.classList.add('active')
};

function openModal5() {
    modal5.classList.add('active')
};

function openModal6() {
    modal6.classList.add('active')
};

function openModal7() {
    modal7.classList.add('active')
};

function openModal8() {
    modal8.classList.add('active')
};

function openModal9() {
    modal9.classList.add('active')
};

function closeModal() {
    modal.classList.remove('active')
};

function closeModal2() {
    modal2.classList.remove('active')
};

function closeModal3() {
    modal3.classList.remove('active')
};

function closeModal4() {
    modal4.classList.remove('active')
};

function closeModal5() {
    modal5.classList.remove('active')
};

function closeModal6() {
    modal6.classList.remove('active')
};

function closeModal7() {
    modal7.classList.remove('active')
};

function closeModal8() {
    modal8.classList.remove('active')
};

function closeModal9s() {
    modal9.classList.remove('active')
};