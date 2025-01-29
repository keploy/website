import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  productsNav,
  solutionsNav,
  developersNav,
  resourcesNav,
} from "@/config/nav";

interface FeaturedCardContent {
  href: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  logoBg?: string;
}
interface QuickLink {
  title: string;
  href: string;
  icon: any;
  iconColor: string;
  sectionTitle?: string;
}

interface NavItem {
  title: string;
  href: string;
  description: string;
  icon: any;
  iconColor: string;
}

const FeaturedCard = ({ content }: { content: FeaturedCardContent }) => (
  <Link
    href={content.href}
    className="group relative block w-full overflow-hidden rounded-lg p-1 transition-all duration-200"
  >
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "relative w-14 h-14 flex-shrink-0 border-[0.1rem] rounded-lg flex items-center justify-center",
          content.logoBg || "bg-gray-400",
        )}
      >
        <content.logo />
      </div>
      <p className="text-[13px] font-medium leading-snug text-primary/80 group-hover:text-primary transition-colors">
        {content.title}
      </p>
    </div>
  </Link>
);

const ListItem = ({ item }: { item: NavItem }) => (
  <Link
    href={item.href}
    className="group flex items-start gap-3 rounded-lg p-2 text-sm"
  >
    <span
      className={cn(
        "mt-1 p-1.5 rounded-md border border-muted-foreground/20 ",
        "group-hover:bg-orange-500/5",
      )}
    >
      <item.icon className={cn("h-4 w-4 text-orange-500")} />
    </span>
    <div className="flex-1 min-w-0">
      <p className="font-medium group-hover:text-primary flex items-center text-[13px]">
        <span className="truncate">{item.title}</span>
        <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
      </p>
      <p className="text-[13px] text-muted-foreground line-clamp-2">
        {item.description}
      </p>
    </div>
  </Link>
);
const QuickLinks = ({
  title,
  links,
}: {
  title?: string;
  links: QuickLink[];
}) => (
  <div className="space-y-2">
    {title && (
      <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
    )}
    <div className="grid gap-1">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="group flex items-center text-sm hover:text-primary p-1"
        >
          <span className="truncate text-[13px]">{link.title}</span>
          <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  </div>
);
export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 text-sm">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-auto min-w-[800px] max-w-[95vw] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productsNav.mainColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  {column.isClickable ? (
                    <Link href={column.href} className="group inline-block">
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {column.title}
                        <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                      </p>
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">
                      {column.title}
                    </p>
                  )}
                  <div className="grid gap-2">
                    {column.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-3 lg:col-span-1">
                <Link
                  href={productsNav.featuredContent.href}
                  className="group inline-block"
                >
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    {productsNav.featuredContent.title}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                  </p>
                </Link>
                <FeaturedCard
                  content={productsNav.featuredContent.featuredCard}
                />
                <QuickLinks
                  title={productsNav.featuredContent.quickLinksTitle}
                  links={productsNav.featuredContent.links}
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 text-sm">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-auto min-w-[800px] max-w-[95vw] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutionsNav.mainColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  {column.isClickable ? (
                    <Link href={column.href} className="group inline-block">
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {column.title}
                        <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                      </p>
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">
                      {column.title}
                    </p>
                  )}
                  <div className="grid gap-2">
                    {column.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-3 lg:col-span-1">
                <Link
                  href={solutionsNav.featuredContent.href}
                  className="group inline-block"
                >
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    {productsNav.featuredContent.title}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                  </p>
                </Link>
                <FeaturedCard
                  content={solutionsNav.featuredContent.featuredCard}
                />
                <QuickLinks
                  title={solutionsNav.featuredContent.quickLinksTitle}
                  links={solutionsNav.featuredContent.links}
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 text-sm">
            Developers
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-auto min-w-[800px] max-w-[95vw] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {developersNav.mainColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  {column.isClickable ? (
                    <Link href={column.href} className="group inline-block">
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {column.title}
                        <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                      </p>
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">
                      {column.title}
                    </p>
                  )}
                  <div className="grid gap-2">
                    {column.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-3 lg:col-span-1">
                <Link
                  href={developersNav.featuredContent.href}
                  className="group inline-block"
                >
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    {developersNav.featuredContent.title}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                  </p>
                </Link>
                <FeaturedCard
                  content={developersNav.featuredContent.featuredCard}
                />
                <QuickLinks
                  title={developersNav.featuredContent.quickLinksTitle}
                  links={developersNav.featuredContent.links}
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="#pricing"
            className="inline-flex items-center text-black/80 justify-center rounded-md text-sm font-medium transition-colors hover:text-primary h-9 px-4 py-2"
          >
            Pricing
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 text-sm">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-auto min-w-[800px] max-w-[95vw] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resourcesNav.mainColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  {column.isClickable ? (
                    <Link href={column.href} className="group inline-block">
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {column.title}
                        <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                      </p>
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">
                      {column.title}
                    </p>
                  )}
                  <div className="grid gap-2">
                    {column.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-3 lg:col-span-1">
                <Link
                  href={resourcesNav.featuredContent.href}
                  className="group inline-block"
                >
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    {resourcesNav.featuredContent.title}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 inline-block" />
                  </p>
                </Link>
                <FeaturedCard
                  content={resourcesNav.featuredContent.featuredCard}
                />
                <QuickLinks
                  title={resourcesNav.featuredContent.quickLinksTitle}
                  links={resourcesNav.featuredContent.links}
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
