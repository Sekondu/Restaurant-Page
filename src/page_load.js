import Myimg from "./elegant_dish.jpg";


class page_load
{
    constructor()
    {
        //to solve the contact conflict for creating 
        // everything over again in make_Everything
        this.contact_clicked=false;
        //to solve the menu conflict for creating
        //everything over again in make_everything
        this.menu_clicked=false;

    this.div=document.querySelector("#content");
    this.h1=document.createElement("h1");
    this.p=document.createElement("p");
    this.img=document.createElement("img");
    this.container=document.createElement("div");
    this.headline_container=document.createElement("div");
    this.headline_container.classList.add("headline_container");
    this.container.classList.add("container");
    this.h1.textContent="Awesome Restaurant!";
    this.p.textContent="Your gateway to elegant dining! Join us in this majestic dining experience everyday from 1pm till 10pm where we serve rare dishes from over 100 countries, our slogan is Rare is never an excuse for a dish";
    this.img.src=Myimg;
    this.headline_container.appendChild(this.h1);
    this.headline_container.appendChild(this.p);
    this.container.appendChild(this.headline_container);
    this.container.appendChild(this.img);
    this.div.appendChild(this.container);

    //Work Hours
    //containers: 4
    this.hours_container=document.createElement("div");
    this.hours_container.classList.add("hours_container");
    this.staff_hours_container=document.createElement("div");
    this.staff_hours_container.classList.add("staff_hours");
    this.week_days=document.createElement("div");
    this.weekends=document.createElement("div");

    //content: 5
    this.h2_hours=document.createElement("h2");
    this.days_1=document.createElement("h3");
    this.days_2=document.createElement("h3");
    this.days_1_work=document.createElement("p");
    this.days_2_work=document.createElement("p");

    //populating
    this.h2_hours.textContent="Work Hours";
    this.h2_hours.classList.add("h2_hours");
    this.days_1.textContent="Sun - Thr";
    this.days_2.textContent="Fri - Sat";
    this.days_1_work.textContent="1PM - 10PM";
    this.days_2_work.textContent="4PM - 2AM";

    //inserting into containers
    this.week_days.appendChild(this.days_1);
    this.week_days.appendChild(this.days_1_work);
    this.week_days.classList.add("weekdays");
    this.weekends.appendChild(this.days_2);
    this.weekends.appendChild(this.days_2_work);
    this.weekends.classList.add("weekends");
    this.staff_hours_container.appendChild(this.week_days);
    this.staff_hours_container.appendChild(this.weekends);
    this.staff_hours_container.classList.add("staff_hours");
    this.hours_container.appendChild(this.h2_hours);
    this.hours_container.appendChild(this.staff_hours_container);
    

    //inserting to body
    this.div.appendChild(this.hours_container);

    //locations 
    //containers
    this.location_container=document.createElement("div");
    this.location_container.classList.add("location_container");

    //data definitions
    this.location_head=document.createElement("h2");
    this.location_head.classList.add("location_headline");
    this.location=document.createElement("p");
    this.location.classList.add("location");

    //populating data
    this.location_head.textContent="Location";
    this.location.textContent="Saudi Arabia, Dammam, Al Shatea Al Gharbi, Beside AL Shatea Mall";
    this.location_container.appendChild(this.location_head);
    this.location_container.appendChild(this.location);

    //inserting to body
    this.div.appendChild(this.location_container);
    }
    //Awesome Restaurant
    remove_everything()
    {
        this.div.textContent="";
        this.div.className="";
    }
}
let page=new page_load;
export {page};