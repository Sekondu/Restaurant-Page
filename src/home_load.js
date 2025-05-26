export {home_load};
import { page} from "./page_load";



function home_load()
{

page.remove_everything();


    function home_populate()
    {
        page.div.appendChild(page.container);
       page.div.appendChild(page.hours_container)
       page.div.appendChild(page.location_container); 
    }
return home_populate();    
}
