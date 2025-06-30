import React from 'react'
import { ChartsHeader } from '../../components'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend, Tooltip,DataLabel} from '@syncfusion/ej2-react-charts';

import { barPrimaryXAxis, barCustomSeries, barPrimaryYAxis } from '../../data/dummy';

const Bar = () => {
  return (
    <div>
      {console.log(barCustomSeries)}
      <ChartsHeader title="Olympic Medal Counts - RIO" category="Bar"/>
        <ChartComponent 
        id='Barcharts' 
        height='420px'
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