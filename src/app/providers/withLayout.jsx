import React from "react";
import Header from "widgets/header";
import ButtonToUp from "shared/components/buttonToUp/ButtonToUp";
import Decorations from "widgets/decorations/Decorations";
import Footer from "widgets/footer";

export default function WithLayout({ children, toggleTheme }) {
  return (
    <div className="bg-white dark:bg-black h-full">
      <Decorations />

      <Header toggleTheme={toggleTheme} />

      {children}

      <ButtonToUp />

      <Footer />
    </div>
  );
}
