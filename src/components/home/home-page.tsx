import React from "react";
import HomeSection from "./home-section";
import Props from "@/app/type/type";

const HomePage = async () => {
  // const response = await fetch(`${process.env.URL_LINK}/api/products`, {
  //   method: "GET",
  // });
  // const data = await response.json();

  return (
    <>
      <p>sd</p>
      <div className="flex justify-center items-center h-screen">
         <ul className="text-white bg-blue-800  ">
          {data.getBank.map((e: Props) => (
            <li key={e._id}>
              {e.description}, {e.title}, {e.price}, {e.imageUrl}
            </li> 
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
