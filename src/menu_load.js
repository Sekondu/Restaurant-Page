export {menu_load};
import { page } from "./page_load";
import side_img1 from '../potato_side.jpg';
import side_img2 from '../potato_2_side.jpg';
import side_img3 from '../brussel_side.jpg';
import main_img1 from '../chicken_main.webp';
import main_img2 from '../beef_main.webp';
import main_img3 from '../steak_main.webp';
function menu_load()
{
    page.remove_everything();
   function make_everything()
   {
    page.menu_clicked=true;
    //15 containers 
    let menu_container=document.createElement("div");
    let menu_headline=document.createElement("h1");
    let sides_headline=document.createElement("h2");
    let main_headline=document.createElement("h2");
    let beverages_headline=document.createElement("h2");
    let menu_sides=document.createElement("div");
    let menu_main=document.createElement("div");
    let menu_beverages=document.createElement("div");
    let menu_sides_1=document.createElement("div");
    let menu_sides_2=document.createElement("div");
    let menu_sides_3=document.createElement("div");
    let menu_sides_text_1=document.createElement("div");
    let menu_sides_text_2=document.createElement("div");
    let menu_sides_text_3=document.createElement("div");
    let menu_main_1=document.createElement("div");
    let menu_main_2=document.createElement("div");
    let menu_main_3=document.createElement("div");
    let menu_main_text_1=document.createElement("div");
    let menu_main_text_2=document.createElement("div");
    let menu_main_text_3=document.createElement("div");
    let menu_beverages_options=document.createElement("div");

    //adding container classes
    menu_container.classList.add("menu");
    menu_headline.classList.add("menu-headline");
    sides_headline.classList.add("side-headline");
    main_headline.classList.add("main-headline");
    beverages_headline.classList.add("beverages-headline");
    menu_sides.classList.add("menu-sides");
    menu_main.classList.add("menu-main");
    menu_beverages.classList.add("menu-beverages");
    menu_sides_1.classList.add("sides");
    menu_sides_2.classList.add("sides");
    menu_sides_3.classList.add("sides");
    menu_sides_text_1.classList.add("sides_text");
    menu_sides_text_2.classList.add("sides_text");
    menu_sides_text_3.classList.add("sides_text");
    menu_main_1.classList.add("main");
    menu_main_2.classList.add("main");
    menu_main_3.classList.add("main");
    menu_main_text_1.classList.add("main_text");
    menu_main_text_2.classList.add("main_text");
    menu_main_text_3.classList.add("main_text");
    menu_beverages_options.classList.add("beverages-options");
   
    //data definition
   let side_data={
    name:[],
    desc:[],
    img:[],
   };
   let main_data={
    name:[],
    desc:[],
    img:[],
   };
   let menu_beverages_juices=[];
   for(let i=0;i<3;i++)
   {
    side_data.name[i]=document.createElement("h3");
    side_data.desc[i]=document.createElement("p");
    side_data.img[i]=document.createElement("img");
    main_data.name[i]=document.createElement("h3");
    main_data.desc[i]=document.createElement("p");
    main_data.img[i]=document.createElement("img");
    menu_beverages_juices[i]=document.createElement("p");
   }

   //data population
   menu_headline.textContent="Menu";
   sides_headline.textContent="Sides";
   main_headline.textContent="Main";
   beverages_headline.textContent="Beverages";

   side_data.name[0].textContent="Brussel";
   side_data.desc[0].textContent="Shaved Brussels Sprouts Salad";
   side_data.img[0].src=side_img1;

   side_data.name[1].textContent="Smashed Potatos";
   side_data.desc[1].textContent="Garlic Parmesan Smashed Potatoes";
   side_data.img[1].src=side_img2;

   side_data.name[2].textContent="Potato Balls";
   side_data.desc[2].textContent="Cripsy Maple Mustard Stuffed Potato Balls";
   side_data.img[2].src=side_img3;

   main_data.name[0].textContent="Chicken Roll-Ups";
   main_data.desc[0].textContent="Chicken and Roasted Red Pepper Roll-Ups";
   main_data.img[0].src=main_img1;

   main_data.name[1].textContent="Beef Pot";
   main_data.desc[1].textContent="Classic Beef Pot Roast";
   main_data.img[1].src=main_img2;

   main_data.name[2].textContent="Steak with Pineapple";
   main_data.desc[2].textContent="Skirt Steak with Pineapple Salsa";
   main_data.img[2].src=main_img3;

   menu_beverages_juices[0].textContent="Orange Juice------5$";
   menu_beverages_juices[1].textContent="Apple Juice------5$";
   menu_beverages_juices[2].textContent="Mojito Juice------5$";

   //adding data to containers
   
    menu_sides_text_1.appendChild(side_data.name[0]);
    menu_sides_text_1.appendChild(side_data.desc[0]);
    menu_sides_1.appendChild(menu_sides_text_1);
    menu_sides_1.appendChild(side_data.img[0]);
    menu_sides_text_2.appendChild(side_data.name[1]);
    menu_sides_text_2.appendChild(side_data.desc[1]);
    menu_sides_2.appendChild(menu_sides_text_2);
    menu_sides_2.appendChild(side_data.img[1]);
    menu_sides_text_3.appendChild(side_data.name[2]);
    menu_sides_text_3.appendChild(side_data.desc[2]);
    menu_sides_3.appendChild(menu_sides_text_3);
    menu_sides_3.appendChild(side_data.img[2]);

    menu_main_text_1.appendChild(main_data.name[0]);
    menu_main_text_1.appendChild(main_data.desc[0]);
    menu_main_1.appendChild(menu_main_text_1);
    menu_main_1.appendChild(main_data.img[0]);
    menu_main_text_2.appendChild(main_data.name[1]);
    menu_main_text_2.appendChild(main_data.desc[1]);
    menu_main_2.appendChild(menu_main_text_2);
    menu_main_2.appendChild(main_data.img[1]);
    menu_main_text_3.appendChild(main_data.name[2]);
    menu_main_text_3.appendChild(main_data.desc[2]);
    menu_main_3.appendChild(menu_main_text_3);
    menu_main_3.appendChild(main_data.img[2]);

    menu_beverages_options.appendChild(menu_beverages_juices[0]);
    menu_beverages_options.appendChild(menu_beverages_juices[1]); 
    menu_beverages_options.appendChild(menu_beverages_juices[2]);
    
    menu_beverages.appendChild(beverages_headline);
    menu_beverages.appendChild(menu_beverages_options);

    menu_sides.appendChild(sides_headline);
    menu_sides.appendChild(menu_sides_1);
    menu_sides.appendChild(menu_sides_2);
    menu_sides.appendChild(menu_sides_3);

    menu_main.appendChild(main_headline);
    menu_main.appendChild(menu_main_1);
    menu_main.appendChild(menu_main_2);
    menu_main.appendChild(menu_main_3);

    menu_container.appendChild(menu_headline);
    menu_container.appendChild(menu_sides);
    menu_container.appendChild(menu_main);
    menu_container.appendChild(menu_beverages);

    page.div.appendChild(menu_container);

    page.menu_elements=[menu_container,menu_sides,menu_main,menu_beverages];
    }
    function add_Everything()
    {
        for(let i=0;i<4;i++)
        {
            page.div.appendChild(page.menu_elements[i]);
        }
    }
    if(page.menu_clicked)
    {
        return add_Everything();
    }
    else{
        return make_everything();
    }
   
   
}