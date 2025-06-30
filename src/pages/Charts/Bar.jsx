import React from 'react'
import { ChartsHeader } from '../../components'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend, Tooltip,DataLabel} from '@syncfusion/ej2-react-charts';

import { barPrimaryXAxis, barCustomSeries, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider'
const Bar = () => {
    const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      {console.log(barCustomSeries)}
      <ChartsHeader title="Olympic Medal Counts - RIO" category="Bar"/>
        <ChartComponent 
        id='Barcharts' 
        height='420px'
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        primaryXAxis={barPrimaryXAxis}
         primaryYAxis={barPrimaryYAxis} 
         chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true}}>
                    <Inject services={[ColumnSeries, Category, Legend, Tooltip,DataLabel]} />
                    <SeriesCollectionDirective >
                      {barCustomSeries.map((item,index) => 
                      <SeriesDirective key={index} {...item}/>
                      )}
                    </SeriesCollectionDirective>
                </ChartComponent>
    </div>
  )
}

export default Bar