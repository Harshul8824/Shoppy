import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";
import {Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData, ecomPieChartData} from '../data/dummy'
import { ContextProvider, useStateContext } from '../contexts/ContextProvider'
import welcome from '../data/welcome.svg'

const Ecommerce = () => {

  const {currentColor} = useStateContext();
  return (
    <div className='mt-12'>

    <div className="flex flex-col lg:flex-nowrap justify-center items-center">
  {/* Main Earnings Card with Background Image */}
  <div className="relative w-full lg:w-4/5 h-44 m-3 rounded-xl overflow-hidden shadow-md">
    
    {/* Background Image */}
    <img
      src={welcome}
      alt="welcome"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
      <div>
        <p className="text-gray-600 dark:text-gray-300 font-semibold">Earnings</p>
        <p className="text-2xl font-bold text-black dark:text-white">$63,448.78</p>
      </div>

      <div className='mt-6'>
        <Button
          color="white"
          bgColor= {currentColor}
          text="Download"
          borderRadius="10px"
        />
      </div>
    </div>
  </div>



  {/* Earnings Data Cards */}
  <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
    {earningData.map((item) => (
      <div
        key={item.title}
        className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-sm"
      >
        <button
          type="button"
          style={{ color: item.iconColor, backgroundColor: item.iconBg }}
          className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
        >
          {item.icon}
        </button>

        <p className="mt-3">
          <span className="text-lg font-semibold">{item.amount}</span>
          <span className={`text-sm text-${item.pcColor} ml-2`}>
            {item.percentage}
          </span>
        </p>

        <p className="text-sm text-gray-400 mt-1">{item.title}</p>

      </div>
    ))}
  </div>
</div>

    <div className='flex gap-10 flex-wrap justify-center'>
     <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
      <div className='flex justify-between'>
        <p className='font-semibold text-xl'> Revenue Updates</p>
        <div className='flex items-center gap-4'>
          <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
            <span><GoDotFill  /></span>
             <span>Expenses</span>
          </p>
          <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
            <span><GoDotFill /></span>
             <span>Budget</span>
          </p>
        </div>
      </div>
      <div className='mt-10 flex gap-10 flex-wrap justify-center'>
        <div className='border-r-1 border-color m-4 pr-10 '>
          <div>
            <p>
              <span className='text-3xl font-semibold'>$93,438</span>
              <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
            </p>
            <p className='text-gray-500 mt-1'>Budget</p>
          </div>

          <div className='mt-8'>
            <p>
              <span className='text-3xl font-semibold'>$93,438</span>
            </p>
            <p className='text-gray-500 mt-1'>Expenses</p>
          </div>
          <div className='mt-5'>
            <SparkLine
            id = "line-sparkline"
            height = "80px"
            data = {SparklineAreaData}
            color = {currentColor}
            type = "Line"
            currentColor = {currentColor}
            width = "250px" 
            />
          </div>

          <div className='mt-10'>
            <Button 
            color = "white"
            bgColor = {currentColor}
            text = "Download Report"
            borderRadius = "10px"
            />
          </div>

        </div>
        <div >
          <Stacked 
          width = "320px"
          height = "360px"
          />
        </div>
      </div>
     </div>

    </div>
  </div>
  )
}

export default Ecommerce