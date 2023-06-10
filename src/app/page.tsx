"use client"
import Header from "@/Layouts/Header";
import Carousel from "../Components/Carousel";
import { ProductCart } from "@/Components/ProductCart";


export default function Home() {
  return (
    <div className=''>
        <Carousel/>
        <div className="mx-auto max-w-6xl mt-6" >
          <section className="mt-12 mx-5">
            <h2 className="text-2xl text-[#ff5575] text-center mb-4 font-extrabold">GẤU TEDDY</h2>
            <hr className="border-blue-400 mb-6"/>
            <section className="grid grid-cols-12 md:gap-8 gap-4">
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3"><ProductCart/></div>
            </section>
            <p className="font-bold text-center">
              <span className="bg-[#ff5575] inline-block text-white rounded-xl hover:cursor-pointer hover:bg-blue-500 px-3 py-1 my-8 transition-colors duration-200">XEM TẤT CẢ GẤU TEDDY</span>
            </p>
          </section>
      
        </div>



      

    </div>
  )
}
