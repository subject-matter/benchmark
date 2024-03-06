"use client";


import Container from "./container";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Plus } from "lucide-react";

export default function Header() {
	
	const pathname = usePathname();


	useEffect(() => {
    const openMenu = () => {
      const menu = document.getElementById('menu');
      const glass = document.getElementById('glass');
      const body = document.body;
      if (menu && glass) {
        menu.classList.add('open');
        glass.style.opacity = '100';
        glass.style.visibility = 'visible';
        body.classList.add('overflow-y-hidden');
      }
    };

    const button = document.getElementById('openMenuButton');
    if (button) {
      button.addEventListener('click', openMenu);
    }
  }, []);

	return (
    <header className="" id="header">
      <Container>
        <div className="flex flex-wrap">
          <nav className="ml-auto flex w-full space-x-3 text-sm md:w-auto md:text-base">
            <button
              id={'openMenuButton'}
              className={`fixed right-[10px] top-[10px] z-20 flex h-[30px] w-[100px] items-center justify-between rounded-[5px] bg-[#999999] bg-opacity-10 px-3 text-xxs backdrop-blur-lg md:right-5 md:h-[35px] md:w-[120px] gi `}
            >
              Menu{' '}
              <span>
                <Plus size={15} />
              </span>
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
