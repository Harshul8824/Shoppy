import React from 'react'

import { ChartsHeader } from '../../components'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, IAccLoadedEventArgs, AccumulationSelection, AccumulationTheme, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider'

const Pyramid = () => {
    const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
       
       <AccumulationChartComponent 
       legendSettings={{ background : 'white' }} 
       id='pyramid-chart'
       tooltip={{ enable: true}}
       background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
              <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                         dataSource={PyramidData}
                        xName='x'
                        yName='y'
                        name='Food'
                        type='Pyramid' 
                        width={'45%'} 
                        height='80%'  
                        neckWidth='15%'  
                        gapRatio={0.03} 
                        explode={true} 
                        emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                        dataLabel={{ visible: true, name: 'text', position: 'Inside', fontWeight: '600' }} />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid