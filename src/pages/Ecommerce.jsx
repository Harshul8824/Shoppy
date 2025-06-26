import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitveDot} from 'react-icons/go'
import {Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData, ecomPieChartData} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import welcome from '../data/welcome.svg'

const Ecommerce = () => {
  return (
    <div className='mt-12'>

    <div className="flex flex-wrap lg:flex-nowrap justify-center">
  {/* Main Earnings Card with Background Image */}
  <div className="relative w-full lg:w-3/5 h-44 m-3 rounded-xl overflow-hidden shadow-md">
    
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

      <div>
        <Button
          color="white"
          // bgColor={currentColor}
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

    </div>
  )
}

export default Ecommerce