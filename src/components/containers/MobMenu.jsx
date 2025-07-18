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

export function MobMenu({ pathname }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
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
                      "text-sm font-medium hover:text-violet-700 transition-colors block py-2",
                      pathname === item.path
                        ? "text-violet-700 font-semibold"
                        : "text-neutral-700"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </DrawerHeader>

          <DrawerFooter className="pb-10">
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 mx-auto">
              Get in Touch
            </Button>
            <DrawerClose
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center w-full text-neutral-500 hover:text-neutral-700"
            >
              Close Menu
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
