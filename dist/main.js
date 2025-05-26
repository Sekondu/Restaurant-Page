/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./beef_main.webp":
/*!************************!*\
  !*** ./beef_main.webp ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9245d3c56a886efc3f76.webp\";\n\n//# sourceURL=webpack:///./beef_main.webp?");

/***/ }),

/***/ "./brussel_side.jpg":
/*!**************************!*\
  !*** ./brussel_side.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be8ea9c345e7ebcb07bf.jpg\";\n\n//# sourceURL=webpack:///./brussel_side.jpg?");

/***/ }),

/***/ "./chicken_main.webp":
/*!***************************!*\
  !*** ./chicken_main.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db5ee10fcfe2e0199394.webp\";\n\n//# sourceURL=webpack:///./chicken_main.webp?");

/***/ }),

/***/ "./potato_2_side.jpg":
/*!***************************!*\
  !*** ./potato_2_side.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6b352443bf8392bd14e.jpg\";\n\n//# sourceURL=webpack:///./potato_2_side.jpg?");

/***/ }),

/***/ "./potato_side.jpg":
/*!*************************!*\
  !*** ./potato_side.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19f180f6b4fbc6ff3ae3.jpg\";\n\n//# sourceURL=webpack:///./potato_side.jpg?");

/***/ }),

/***/ "./src/contact_load.js":
/*!*****************************!*\
  !*** ./src/contact_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact_load: () => (/* binding */ contact_load)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n\n\n\nfunction contact_load()\n{\n    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove_everything();\n    function make_everything()\n    {\n        if(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.contact_clicked)\n        {\n            return;\n        }\n        _page_load__WEBPACK_IMPORTED_MODULE_0__.page.contact_clicked=true;\n\n        //container creation\n        let div=document.createElement(\"div\");\n        div.classList.add(\"contact_container\");\n        let number_div=document.createElement(\"div\");\n        number_div.classList.add(\"number_div\");\n        let contact_1=document.createElement(\"div\");\n        let contact_2=document.createElement(\"div\");\n        let contact_3=document.createElement(\"div\");\n        contact_1.classList.add(\"contact\");\n        contact_2.classList.add(\"contact\"); \n        contact_3.classList.add(\"contact\"); \n\n        //content creation\n        let contact_headline=document.createElement(\"h1\");\n        contact_headline.classList.add(\"contact_headline\");\n        let contact_1_name=document.createElement(\"h3\");\n        let contact_2_name=document.createElement(\"h3\");\n        let contact_3_name=document.createElement(\"h3\");\n        let contact_1_data=document.createElement(\"p\");\n        let contact_2_data=document.createElement(\"p\");\n        let contact_3_data=document.createElement(\"p\");\n\n        //content population\n        contact_headline.textContent=\"Contact US!\";\n        contact_1_name.textContent=\"Sekundo: CEO\";\n        contact_2_name.textContent=\"Noor: Restaurant Manager\";\n        contact_3_name.textContent=\"Walid: Customer Service Manager\";\n        contact_1_data.textContent=\"+123456789---rwid@anything.com\";\n        contact_2_data.textContent=\"+123456789---Noor@anything.com\";\n        contact_3_data.textContent=\"+123456789---Walid@anything.com\";\n\n        //adding data to containers\n        contact_1.appendChild(contact_1_name);\n        contact_1.appendChild(contact_1_data);\n        contact_2.appendChild(contact_2_name);\n        contact_2.appendChild(contact_2_data);\n        contact_3.appendChild(contact_3_name);\n        contact_3.appendChild(contact_3_data);\n        number_div.appendChild(contact_1);\n        number_div.appendChild(contact_2);\n        number_div.appendChild(contact_3);\n        div.appendChild(contact_headline);\n        div.appendChild(number_div);\n        _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(div);\n        _page_load__WEBPACK_IMPORTED_MODULE_0__.page.contact_elements=[contact_1,contact_2,contact_3,number_div,div];\n    }\n    function add_Everything()\n    {\n        let data=_page_load__WEBPACK_IMPORTED_MODULE_0__.page.contact_elements;\n        data[3].appendChild(data[0]);\n        data[3].appendChild(data[1]);\n        data[3].appendChild(data[2]);\n        data[4].appendChild(data[3]);\n        _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(data[4]);\n    }\n    if(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.contact_clicked)\n    {\n      return  add_Everything();\n    }\n    else{\n       return make_everything();\n    }\n}\n\n//# sourceURL=webpack:///./src/contact_load.js?");

/***/ }),

/***/ "./src/elegant_dish.jpg":
/*!******************************!*\
  !*** ./src/elegant_dish.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91a6d5a42c5db3e49de1.jpg\";\n\n//# sourceURL=webpack:///./src/elegant_dish.jpg?");

/***/ }),

/***/ "./src/home_load.js":
/*!**************************!*\
  !*** ./src/home_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home_load: () => (/* binding */ home_load)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n\n\n\n\n\nfunction home_load()\n{\n\n_page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove_everything();\n\n\n    function home_populate()\n    {\n        _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.container);\n       _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.hours_container)\n       _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.location_container); \n    }\nreturn home_populate();    \n}\n\n\n//# sourceURL=webpack:///./src/home_load.js?");

/***/ }),

/***/ "./src/menu_load.js":
/*!**************************!*\
  !*** ./src/menu_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu_load: () => (/* binding */ menu_load)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n/* harmony import */ var _potato_side_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../potato_side.jpg */ \"./potato_side.jpg\");\n/* harmony import */ var _potato_2_side_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../potato_2_side.jpg */ \"./potato_2_side.jpg\");\n/* harmony import */ var _brussel_side_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brussel_side.jpg */ \"./brussel_side.jpg\");\n/* harmony import */ var _chicken_main_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chicken_main.webp */ \"./chicken_main.webp\");\n/* harmony import */ var _beef_main_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../beef_main.webp */ \"./beef_main.webp\");\n/* harmony import */ var _steak_main_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../steak_main.webp */ \"./steak_main.webp\");\n\n\n\n\n\n\n\n\nfunction menu_load()\n{\n    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove_everything();\n   function make_everything()\n   {\n    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.menu_clicked=true;\n    //15 containers \n    let menu_container=document.createElement(\"div\");\n    let menu_headline=document.createElement(\"h1\");\n    let sides_headline=document.createElement(\"h2\");\n    let main_headline=document.createElement(\"h2\");\n    let beverages_headline=document.createElement(\"h2\");\n    let menu_sides=document.createElement(\"div\");\n    let menu_main=document.createElement(\"div\");\n    let menu_beverages=document.createElement(\"div\");\n    let menu_sides_1=document.createElement(\"div\");\n    let menu_sides_2=document.createElement(\"div\");\n    let menu_sides_3=document.createElement(\"div\");\n    let menu_sides_text_1=document.createElement(\"div\");\n    let menu_sides_text_2=document.createElement(\"div\");\n    let menu_sides_text_3=document.createElement(\"div\");\n    let menu_main_1=document.createElement(\"div\");\n    let menu_main_2=document.createElement(\"div\");\n    let menu_main_3=document.createElement(\"div\");\n    let menu_main_text_1=document.createElement(\"div\");\n    let menu_main_text_2=document.createElement(\"div\");\n    let menu_main_text_3=document.createElement(\"div\");\n    let menu_beverages_options=document.createElement(\"div\");\n\n    //adding container classes\n    menu_container.classList.add(\"menu\");\n    menu_headline.classList.add(\"menu-headline\");\n    sides_headline.classList.add(\"side-headline\");\n    main_headline.classList.add(\"main-headline\");\n    beverages_headline.classList.add(\"beverages-headline\");\n    menu_sides.classList.add(\"menu-sides\");\n    menu_main.classList.add(\"menu-main\");\n    menu_beverages.classList.add(\"menu-beverages\");\n    menu_sides_1.classList.add(\"sides\");\n    menu_sides_2.classList.add(\"sides\");\n    menu_sides_3.classList.add(\"sides\");\n    menu_sides_text_1.classList.add(\"sides_text\");\n    menu_sides_text_2.classList.add(\"sides_text\");\n    menu_sides_text_3.classList.add(\"sides_text\");\n    menu_main_1.classList.add(\"main\");\n    menu_main_2.classList.add(\"main\");\n    menu_main_3.classList.add(\"main\");\n    menu_main_text_1.classList.add(\"main_text\");\n    menu_main_text_2.classList.add(\"main_text\");\n    menu_main_text_3.classList.add(\"main_text\");\n    menu_beverages_options.classList.add(\"beverages-options\");\n   \n    //data definition\n   let side_data={\n    name:[],\n    desc:[],\n    img:[],\n   };\n   let main_data={\n    name:[],\n    desc:[],\n    img:[],\n   };\n   let menu_beverages_juices=[];\n   for(let i=0;i<3;i++)\n   {\n    side_data.name[i]=document.createElement(\"h3\");\n    side_data.desc[i]=document.createElement(\"p\");\n    side_data.img[i]=document.createElement(\"img\");\n    main_data.name[i]=document.createElement(\"h3\");\n    main_data.desc[i]=document.createElement(\"p\");\n    main_data.img[i]=document.createElement(\"img\");\n    menu_beverages_juices[i]=document.createElement(\"p\");\n   }\n\n   //data population\n   menu_headline.textContent=\"Menu\";\n   sides_headline.textContent=\"Sides\";\n   main_headline.textContent=\"Main\";\n   beverages_headline.textContent=\"Beverages\";\n\n   side_data.name[0].textContent=\"Brussel\";\n   side_data.desc[0].textContent=\"Shaved Brussels Sprouts Salad\";\n   side_data.img[0].src=_potato_side_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n   side_data.name[1].textContent=\"Smashed Potatos\";\n   side_data.desc[1].textContent=\"Garlic Parmesan Smashed Potatoes\";\n   side_data.img[1].src=_potato_2_side_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\n   side_data.name[2].textContent=\"Potato Balls\";\n   side_data.desc[2].textContent=\"Cripsy Maple Mustard Stuffed Potato Balls\";\n   side_data.img[2].src=_brussel_side_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n   main_data.name[0].textContent=\"Chicken Roll-Ups\";\n   main_data.desc[0].textContent=\"Chicken and Roasted Red Pepper Roll-Ups\";\n   main_data.img[0].src=_chicken_main_webp__WEBPACK_IMPORTED_MODULE_4__;\n\n   main_data.name[1].textContent=\"Beef Pot\";\n   main_data.desc[1].textContent=\"Classic Beef Pot Roast\";\n   main_data.img[1].src=_beef_main_webp__WEBPACK_IMPORTED_MODULE_5__;\n\n   main_data.name[2].textContent=\"Steak with Pineapple\";\n   main_data.desc[2].textContent=\"Skirt Steak with Pineapple Salsa\";\n   main_data.img[2].src=_steak_main_webp__WEBPACK_IMPORTED_MODULE_6__;\n\n   menu_beverages_juices[0].textContent=\"Orange Juice------5$\";\n   menu_beverages_juices[1].textContent=\"Apple Juice------5$\";\n   menu_beverages_juices[2].textContent=\"Mojito Juice------5$\";\n\n   //adding data to containers\n   \n    menu_sides_text_1.appendChild(side_data.name[0]);\n    menu_sides_text_1.appendChild(side_data.desc[0]);\n    menu_sides_1.appendChild(menu_sides_text_1);\n    menu_sides_1.appendChild(side_data.img[0]);\n    menu_sides_text_2.appendChild(side_data.name[1]);\n    menu_sides_text_2.appendChild(side_data.desc[1]);\n    menu_sides_2.appendChild(menu_sides_text_2);\n    menu_sides_2.appendChild(side_data.img[1]);\n    menu_sides_text_3.appendChild(side_data.name[2]);\n    menu_sides_text_3.appendChild(side_data.desc[2]);\n    menu_sides_3.appendChild(menu_sides_text_3);\n    menu_sides_3.appendChild(side_data.img[2]);\n\n    menu_main_text_1.appendChild(main_data.name[0]);\n    menu_main_text_1.appendChild(main_data.desc[0]);\n    menu_main_1.appendChild(menu_main_text_1);\n    menu_main_1.appendChild(main_data.img[0]);\n    menu_main_text_2.appendChild(main_data.name[1]);\n    menu_main_text_2.appendChild(main_data.desc[1]);\n    menu_main_2.appendChild(menu_main_text_2);\n    menu_main_2.appendChild(main_data.img[1]);\n    menu_main_text_3.appendChild(main_data.name[2]);\n    menu_main_text_3.appendChild(main_data.desc[2]);\n    menu_main_3.appendChild(menu_main_text_3);\n    menu_main_3.appendChild(main_data.img[2]);\n\n    menu_beverages_options.appendChild(menu_beverages_juices[0]);\n    menu_beverages_options.appendChild(menu_beverages_juices[1]); \n    menu_beverages_options.appendChild(menu_beverages_juices[2]);\n    \n    menu_beverages.appendChild(beverages_headline);\n    menu_beverages.appendChild(menu_beverages_options);\n\n    menu_sides.appendChild(sides_headline);\n    menu_sides.appendChild(menu_sides_1);\n    menu_sides.appendChild(menu_sides_2);\n    menu_sides.appendChild(menu_sides_3);\n\n    menu_main.appendChild(main_headline);\n    menu_main.appendChild(menu_main_1);\n    menu_main.appendChild(menu_main_2);\n    menu_main.appendChild(menu_main_3);\n\n    menu_container.appendChild(menu_headline);\n    menu_container.appendChild(menu_sides);\n    menu_container.appendChild(menu_main);\n    menu_container.appendChild(menu_beverages);\n\n    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(menu_container);\n\n    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.menu_elements=[menu_container,menu_sides,menu_main,menu_beverages];\n    }\n    function add_Everything()\n    {\n        for(let i=0;i<4;i++)\n        {\n            _page_load__WEBPACK_IMPORTED_MODULE_0__.page.div.appendChild(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.menu_elements[i]);\n        }\n    }\n    if(_page_load__WEBPACK_IMPORTED_MODULE_0__.page.menu_clicked)\n    {\n        return add_Everything();\n    }\n    else{\n        return make_everything();\n    }\n   \n   \n}\n\n//# sourceURL=webpack:///./src/menu_load.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   page: () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var _elegant_dish_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elegant_dish.jpg */ \"./src/elegant_dish.jpg\");\n\n\n\nclass page_load\n{\n    constructor()\n    {\n        //to solve the contact conflict for creating \n        // everything over again in make_Everything\n        this.contact_clicked=false;\n        //to solve the menu conflict for creating\n        //everything over again in make_everything\n        this.menu_clicked=false;\n\n    this.div=document.querySelector(\"#content\");\n    this.h1=document.createElement(\"h1\");\n    this.p=document.createElement(\"p\");\n    this.img=document.createElement(\"img\");\n    this.container=document.createElement(\"div\");\n    this.headline_container=document.createElement(\"div\");\n    this.headline_container.classList.add(\"headline_container\");\n    this.container.classList.add(\"container\");\n    this.h1.textContent=\"Awesome Restaurant!\";\n    this.p.textContent=\"Your gateway to elegant dining! Join us in this majestic dining experience everyday from 1pm till 10pm where we serve rare dishes from over 100 countries, our slogan is Rare is never an excuse for a dish\";\n    this.img.src=_elegant_dish_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    this.headline_container.appendChild(this.h1);\n    this.headline_container.appendChild(this.p);\n    this.container.appendChild(this.headline_container);\n    this.container.appendChild(this.img);\n    this.div.appendChild(this.container);\n\n    //Work Hours\n    //containers: 4\n    this.hours_container=document.createElement(\"div\");\n    this.hours_container.classList.add(\"hours_container\");\n    this.staff_hours_container=document.createElement(\"div\");\n    this.staff_hours_container.classList.add(\"staff_hours\");\n    this.week_days=document.createElement(\"div\");\n    this.weekends=document.createElement(\"div\");\n\n    //content: 5\n    this.h2_hours=document.createElement(\"h2\");\n    this.days_1=document.createElement(\"h3\");\n    this.days_2=document.createElement(\"h3\");\n    this.days_1_work=document.createElement(\"p\");\n    this.days_2_work=document.createElement(\"p\");\n\n    //populating\n    this.h2_hours.textContent=\"Work Hours\";\n    this.h2_hours.classList.add(\"h2_hours\");\n    this.days_1.textContent=\"Sun - Thr\";\n    this.days_2.textContent=\"Fri - Sat\";\n    this.days_1_work.textContent=\"1PM - 10PM\";\n    this.days_2_work.textContent=\"4PM - 2AM\";\n\n    //inserting into containers\n    this.week_days.appendChild(this.days_1);\n    this.week_days.appendChild(this.days_1_work);\n    this.week_days.classList.add(\"weekdays\");\n    this.weekends.appendChild(this.days_2);\n    this.weekends.appendChild(this.days_2_work);\n    this.weekends.classList.add(\"weekends\");\n    this.staff_hours_container.appendChild(this.week_days);\n    this.staff_hours_container.appendChild(this.weekends);\n    this.staff_hours_container.classList.add(\"staff_hours\");\n    this.hours_container.appendChild(this.h2_hours);\n    this.hours_container.appendChild(this.staff_hours_container);\n    \n\n    //inserting to body\n    this.div.appendChild(this.hours_container);\n\n    //locations \n    //containers\n    this.location_container=document.createElement(\"div\");\n    this.location_container.classList.add(\"location_container\");\n\n    //data definitions\n    this.location_head=document.createElement(\"h2\");\n    this.location_head.classList.add(\"location_headline\");\n    this.location=document.createElement(\"p\");\n    this.location.classList.add(\"location\");\n\n    //populating data\n    this.location_head.textContent=\"Location\";\n    this.location.textContent=\"Saudi Arabia, Dammam, Al Shatea Al Gharbi, Beside AL Shatea Mall\";\n    this.location_container.appendChild(this.location_head);\n    this.location_container.appendChild(this.location);\n\n    //inserting to body\n    this.div.appendChild(this.location_container);\n    }\n    //Awesome Restaurant\n    remove_everything()\n    {\n        this.div.textContent=\"\";\n        this.div.className=\"\";\n    }\n}\nlet page=new page_load;\n\n\n//# sourceURL=webpack:///./src/page_load.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home_load */ \"./src/home_load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_load */ \"./src/contact_load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu_load */ \"./src/menu_load.js\");\n\n\n\n\n\n\n\n\nclass interface_switch\n{\n    constructor()\n    {\n        this.interface=1;\n        this.button=document.querySelector(\".home\");\n        this.button.classList.add(\"button_pressed\");\n        this.buttons=document.querySelectorAll(\"li>button\");\n        this.buttons.forEach(button =>\n        {\n            button.addEventListener(\"click\",(event)=>\n            {\n                let b=event.target;\n                if(b.classList.contains(\"home\") && this.interface!=1)\n                {\n                    (0,_home_load__WEBPACK_IMPORTED_MODULE_2__.home_load)();\n                    this.resetButtonsStyle();\n                    b.classList.add(\"button_pressed\");\n                    this.interface=1;\n                }\n                else if(b.classList.contains(\"menu\") && this.interface!=2)\n                {\n                    (0,_menu_load__WEBPACK_IMPORTED_MODULE_4__.menu_load)();\n                    this.resetButtonsStyle();\n                    b.classList.add(\"button_pressed\");\n                    this.interface=2;\n                }\n                else if(b.classList.contains(\"contact\") && this.interface!=3)\n                {\n                    (0,_contact_load__WEBPACK_IMPORTED_MODULE_3__.contact_load)();\n                    this.resetButtonsStyle();\n                    b.classList.add(\"button_pressed\");\n                    this.interface=3;\n                }\n            })\n        }\n        )\n    }\n    resetButtonsStyle(){\n        this.buttons.forEach(button =>{button.classList.remove(\"button_pressed\")});\n    }\n    \n}\nnew interface_switch();\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./steak_main.webp":
/*!*************************!*\
  !*** ./steak_main.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be40f05c33bee3130aa1.webp\";\n\n//# sourceURL=webpack:///./steak_main.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;