"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import WhatsAppIcon from "@/icons/whatsAppIcon"

export const MenuList = ({ className }: { className?: string }) => {
	return (
		<NavigationMenu className={className}>
			<NavigationMenuList className="flex flex-col lg:flex-row">
				<NavigationMenuItem>
					<NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>

										<div className="mb-2 mt-4 text-lg font-medium">
											Tulas Personalizadas
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Llevate una tula personalizada con tu logo o diseño favorito.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/shop?page=1" title="Tienda">
								Accede a todos nuestros productos que tenemos para ti
							</ListItem>
							<ListItem href="/category?page=1" title="Categorías">
								Explora las diferentes categorías de productos que tenemos
							</ListItem>
							<ListItem href="/" title="Accesorios">
								Productos complementarios como tazas, cojines, etc.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Tulas</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[280px] gap-3 p-1 sm:w-[400px] sm:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="https://wa.me/573146709120?text=Hola%2C%20estoy%20interesado%20en%20hacer%20un%20pedido" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							WhatsApp <WhatsAppIcon size={20} className="w-5 h-5 ml-1" />
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}


const components: { title: string; href: string; description: string }[] = [
	{
		title: "Tulas modernas",
		href: "/category/tulas-modernas",
		description:
			"Tulas de gran tamaño con bolsillo tracero, he interno",
	},
	{
		title: "Tulas economicas",
		href: "/category/tulas-economicas",
		description:
			"Café en forma de polvo listo para ser utilizado en diferentes métodos de preparación, como la cafetera de filtro o la prensa francesa",
	},
	{
		title: "Tulas tradicionales",
		href: "/category/tulas-tradicionales",
		description:
			"Café envasado en cápsulas individuales, ofreciendo conveniencia y consistencia en la preparación",
	},
]

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"