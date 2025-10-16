import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";


export function NavBar() {
  return (
    <>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="bg-blue-600 text-gray-100 hover:bg-blue-600/50 hover:text-gray-100 " to="/">Tarefas</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="bg-blue-600 text-gray-100  hover:bg-blue-600/50  hover:text-gray-100" to="/formulario">Formulario</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
