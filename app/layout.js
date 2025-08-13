// app/layout.js
import React from "react";

// import Header from "@/components/layout/Header";
import "../app/globals.css"
// import Footer from "@/components/layout/Footer";
import ReduxProvider from "@/components/redux/redux-provider";
import store from "@/redux/store";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
export const metadata = {
  title: "Navneet",
  description: "Navneet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
      <ReduxProvider>
          <Header />
         
          {children}
       
          <Footer />
            </ReduxProvider>
       
      </body>
    </html>
  );
}
