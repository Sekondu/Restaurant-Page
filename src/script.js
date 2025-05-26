import "./style.css";
import {page} from "./page_load";
import { home_load } from "./home_load";
import { contact_load } from "./contact_load";
import { menu_load } from "./menu_load";



class interface_switch
{
    constructor()
    {
        this.interface=1;
        this.button=document.querySelector(".home");
        this.button.classList.add("button_pressed");
        this.buttons=document.querySelectorAll("li>button");
        this.buttons.forEach(button =>
        {
            button.addEventListener("click",(event)=>
            {
                let b=event.target;
                if(b.classList.contains("home") && this.interface!=1)
                {
                    home_load();
                    this.resetButtonsStyle();
                    b.classList.add("button_pressed");
                    this.interface=1;
                }
                else if(b.classList.contains("menu") && this.interface!=2)
                {
                    menu_load();
                    this.resetButtonsStyle();
                    b.classList.add("button_pressed");
                    this.interface=2;
                }
                else if(b.classList.contains("contact") && this.interface!=3)
                {
                    contact_load();
                    this.resetButtonsStyle();
                    b.classList.add("button_pressed");
                    this.interface=3;
                }
            })
        }
        )
    }
    resetButtonsStyle(){
        this.buttons.forEach(button =>{button.classList.remove("button_pressed")});
    }
    
}
new interface_switch();
