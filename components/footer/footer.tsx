import Link from "next/link";
import { Separator } from "../ui/separator";


const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "#"
  },
  {
    id: 2,
    name: "Productos",
    link: "/shop?page=1"
  },
  {
    id: 3,
    name: "Mi cuenta",
    link: "#"
  },
  {
    id: 4,
    name: "Politicas de privacidad",
    link: "#"
  }
]

export const Footer = () => {
  return (
    <footer className="mt-4">
      <section className="w-full max-w-2xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-black text-primary">
              Tulas<span className="text-white font-medium">Personalizadas</span>
            </span> 
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:underline me-4 md:me-6" >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()}  <Link href="#">
            Jamilton  
          </Link>  Todos los derechos reservados.
        </span>
      </section>
    </footer>
  );
}