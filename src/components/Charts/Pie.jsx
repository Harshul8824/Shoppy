import React from 'react'

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, IAccLoadedEventArgs, AccumulationTheme, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider'

import { ChartsHeader, Header } from '../../components'

const Pie = ({ id, data, legendVisiblity, height }) => {
  
  const {currentMode} = useStateContext();

  return (
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pie Chart" title="Project Cost BreakDown" />
        
        <AccumulationChartComponent id='pie-chart' tooltip={{ enable: true}} background={currentMode === 'Dark' ? '#33373E' : '#fff'}       legendSettings={{ visible: legendVisiblity, background: 'white' }}>
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective dataSource={pieChartData} name='Sale' xName='x' yName='y' borderRadius={3} border={{color: '#FFFFFF', width: 1}} dataLabel={{ visible: true, position: 'Outside', name: 'text', font: {
              fontWeight: '600',
              color: '#fff',
            }}} explode  />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
    </div>
  )
}

export default Pie
