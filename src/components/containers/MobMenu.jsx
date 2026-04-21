import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

export function MobMenu({ pathname }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="border-slate-300 bg-white/80 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="list-none space-y-4 pt-6">
            {ROUTES.map((item) => {
              return (
                <li key={item.id} className="text-center">
                  <Link
                    href={item.path}
                    className={cn(
                      "text-sm font-medium hover:text-violet-700 dark:hover:text-violet-200 transition-colors block py-2",
                      pathname === item.path
                        ? "text-violet-700 dark:text-violet-200 font-semibold"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </DrawerHeader>

          <DrawerFooter className="pb-10">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 mx-auto">
              Get in Touch
            </Button>
            <DrawerClose
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center w-full text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              Close Menu
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
