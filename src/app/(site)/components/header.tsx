"use client";

import FancyLink from "./fancyLink";
import Container from "./container";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

export default function Header() {
	

  useEffect(() => {
		const openMenu = () => {
			const menu = document.getElementById("menu");
			const glass = document.getElementById("glass");
			const body = document.body;
			if (menu && glass) {
				menu.classList.add("open");
				glass.style.opacity = "100";
				glass.style.visibility = "visible";
				body.classList.add("overflow-y-hidden");
			}
		};
		const button = document.getElementById("openMenuButton");
		if (button) {
			button.addEventListener("click", openMenu);
		}
	}, []);

  return (
    <header className="" id="header">
      <Container>
        <div className="flex flex-wrap">
          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <button
              id={"openMenuButton"}
              className="w-[100px] md:w-[120px] fixed top-[10px] right-[10px]  text-xxs bg-[#999999] bg-opacity-10 p-3 rounded-[5px] z-20 backdrop-blur-lg flex justify-between items-center"
            >
              Menu{" "}
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
