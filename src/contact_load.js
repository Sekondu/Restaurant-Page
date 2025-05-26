export {contact_load};
import { page } from "./page_load";

function contact_load()
{
    page.remove_everything();
    function make_everything()
    {
        if(page.contact_clicked)
        {
            return;
        }
        page.contact_clicked=true;

        //container creation
        let div=document.createElement("div");
        div.classList.add("contact_container");
        let number_div=document.createElement("div");
        number_div.classList.add("number_div");
        let contact_1=document.createElement("div");
        let contact_2=document.createElement("div");
        let contact_3=document.createElement("div");
        contact_1.classList.add("contact");
        contact_2.classList.add("contact"); 
        contact_3.classList.add("contact"); 

        //content creation
        let contact_headline=document.createElement("h1");
        contact_headline.classList.add("contact_headline");
        let contact_1_name=document.createElement("h3");
        let contact_2_name=document.createElement("h3");
        let contact_3_name=document.createElement("h3");
        let contact_1_data=document.createElement("p");
        let contact_2_data=document.createElement("p");
        let contact_3_data=document.createElement("p");

        //content population
        contact_headline.textContent="Contact US!";
        contact_1_name.textContent="Sekundo: CEO";
        contact_2_name.textContent="Noor: Restaurant Manager";
        contact_3_name.textContent="Walid: Customer Service Manager";
        contact_1_data.textContent="+123456789---rwid@anything.com";
        contact_2_data.textContent="+123456789---Noor@anything.com";
        contact_3_data.textContent="+123456789---Walid@anything.com";

        //adding data to containers
        contact_1.appendChild(contact_1_name);
        contact_1.appendChild(contact_1_data);
        contact_2.appendChild(contact_2_name);
        contact_2.appendChild(contact_2_data);
        contact_3.appendChild(contact_3_name);
        contact_3.appendChild(contact_3_data);
        number_div.appendChild(contact_1);
        number_div.appendChild(contact_2);
        number_div.appendChild(contact_3);
        div.appendChild(contact_headline);
        div.appendChild(number_div);
        page.div.appendChild(div);
        page.contact_elements=[contact_1,contact_2,contact_3,number_div,div];
    }
    function add_Everything()
    {
        let data=page.contact_elements;
        data[3].appendChild(data[0]);
        data[3].appendChild(data[1]);
        data[3].appendChild(data[2]);
        data[4].appendChild(data[3]);
        page.div.appendChild(data[4]);
    }
    if(page.contact_clicked)
    {
      return  add_Everything();
    }
    else{
       return make_everything();
    }
}