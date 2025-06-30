import React from 'react'

import { ChartsHeader } from '../../components'
import { ColorMappingPrimaryXAxis, colorMappingData, ColorMappingPrimaryYAxis,rangeColorMapping } from '../../data/dummy';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Highlight, DataLabel, Tooltip, ILoadedEventArgs, Legend, ChartTheme, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />

  <ChartComponent
   id='charts' 
   style={{ textAlign: "center" }} 
  primaryXAxis={ColorMappingPrimaryXAxis} primaryYAxis={ColorMappingPrimaryYAxis} 
  chartArea={{ border: { width: 0 }, margin: { bottom: 12 } }}
  legendSettings={{ mode: 'Range', background : 'white' }}
   tooltip={{enable : true}}
  >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
            <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
  
            />     
               </SeriesCollectionDirective>    

                    <RangeColorSettingsDirective>
                      {rangeColorMapping.map((item,index)=><RangeColorSettingDirective key={index} {...item} />)}
                    </RangeColorSettingsDirective>
                </ChartComponent>
    </div>
  )
}

export default ColorMapping