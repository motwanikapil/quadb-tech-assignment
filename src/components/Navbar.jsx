import { Grid2x2, List, Menu, MoonStar, Search, SunMedium } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reducers/themeSlice";
import { toggleLayout } from "../reducers/layoutSlice";

export default function Navbar({ handleSidebar }) {
  const { theme } = useSelector((state) => state.theme);
  const { layout } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  function handleDarkMode() {
    dispatch(toggleTheme());
  }

  function handleLayoutChange() {
    dispatch(toggleLayout());
  }

  return (
    <main className="flex justify-between items-center">
      <section className="flex gap-3">
        <button onClick={handleSidebar}>
          <Menu />
        </button>
        <img src="/logo.png" />
      </section>
      <section className="flex gap-3 items-center">
        <Search />
        <button onClick={handleLayoutChange}>
          {layout === "list" ? <Grid2x2 /> : <List />}
        </button>
        <button onClick={handleDarkMode}>
          {theme === "light" ? <SunMedium /> : <MoonStar />}
        </button>
      </section>
    </main>
  );
}
