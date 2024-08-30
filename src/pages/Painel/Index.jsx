/* 

import { PiComputerTowerFill } from "react-icons/pi";
import { BarChart, TickParamsSelector } from '@mui/x-charts/BarChart';


const Painel = () => {

    const dataset = [
        {
          london: 59,
          paris: 57,
          newYork: 86,
          seoul: 21,
          month: 'Jan',
        },
        {
          london: 50,
          paris: 52,
          newYork: 78,
          seoul: 28,
          month: 'Feb',
        },
        {
          london: 47,
          paris: 53,
          newYork: 106,
          seoul: 41,
          month: 'Mar',
        },
        {
          london: 54,
          paris: 56,
          newYork: 92,
          seoul: 73,
          month: 'Apr',
        },
        {
          london: 57,
          paris: 69,
          newYork: 92,
          seoul: 99,
          month: 'May',
        },
        {
          london: 60,
          paris: 63,
          newYork: 103,
          seoul: 144,
          month: 'June',
        },
        {
          london: 59,
          paris: 60,
          newYork: 105,
          seoul: 319,
          month: 'July',
        },
        {
          london: 65,
          paris: 60,
          newYork: 106,
          seoul: 249,
          month: 'Aug',
        },
        {
          london: 51,
          paris: 51,
          newYork: 95,
          seoul: 131,
          month: 'Sept',
        },
        {
          london: 60,
          paris: 65,
          newYork: 97,
          seoul: 55,
          month: 'Oct',
        },
        {
          london: 67,
          paris: 64,
          newYork: 76,
          seoul: 48,
          month: 'Nov',
        },
        {
          london: 61,
          paris: 70,
          newYork: 103,
          seoul: 25,
          month: 'Dec',
        },
      ];
      


    return <>
        <section className='painel'>
            <div className='cabecalho'>
                <div className='lista-equipamentos'>
                    <div>
                        <PiComputerTowerFill className='icone-computador' />
                        <p>15 computadores</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='corpo'>
                <div className='corpo-div-esquerda'>
                    <TickParamsSelector
                        tickPlacement={tickPlacement}
                        tickLabelPlacement={tickLabelPlacement}
                        setTickPlacement={setTickPlacement}
                        setTickLabelPlacement={setTickLabelPlacement}
                    />
                    <BarChart
                        dataset={dataset}
                        xAxis={[
                            { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
                        ]}
                        {...chartSetting}
                    />
                </div>
                <div className='corpo-div-direita'>

                </div>
            </div>
        </section>
    </>
}

export default Painel; */
import { BarChart } from '@mui/x-charts/BarChart';
import './Style.css';

const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Feb',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    },
    {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
    },
    {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
    },
    {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
    },
    {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
    },
    {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
    },
    {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
    },
    {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
    },
    {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
    },
    {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
    },
];

const chartSetting = {
    xAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 400,
  };
  
  const valueFormatter = (value) => `Movimentações`;

const Painel = () => {
    return <>
    <div className='fundo-painel'>
        <header className='cabecalho-painel'>
          Grendene Backup
        </header>
        <div className='painel-cima'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
        </div>
        <div className='painel-baixo'>
          <div className='card-baixo'></div>
          <div className='card-baixo'></div>
        </div>
    </div>
    </>
}

export default Painel;


/*
  <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'seoul', label: 'Quantidad de movimentações', valueFormatter}]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
        />
*/