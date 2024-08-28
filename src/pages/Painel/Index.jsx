import  {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend} from'recharts';
import './Style.css';


const Painel = () => {

    const data = [
        {name: 'Janeiro', movimentacoes: 2400, amt: 2400},
        {name: 'Fevereiro', movimentacoes: 1398, amt: 2210},
        {name: 'Março', movimentacoes: 9800, amt: 2290},
        {name: 'Abril', movimentacoes: 3908, amt: 2000},
        {name: 'Maio', movimentacoes: 4800, amt: 2181},
        {name: 'Junho', movimentacoes: 3800, amt: 2500},
        {name: 'Julho', movimentacoes: 4300, amt: 2100},
      ];
      

    return <>
        <div className='painel'>
            <div className='esquerda'></div>
            <div className='direita'>
                <div className='direita-cima'>
                <LineChart
                    className='grafico'
                    width={1600}
                    height={500} 
                    data={data}
                    margin={{top: 0, right: 0, left: 0, bottom: 0}}
                    >
                    <Line
                    type='monotone'
                    dataKey='movimentacoes'
                    stroke='#8884d8'
                    activeDot={{r: 8}}
                    />
                    <CartesianGrid strokeDasharray='3 3'/>
                    <Tooltip/>
                    <YAxis/>
                    <XAxis dataKey='name'/>
                    <Legend />
                </LineChart>
                </div>
                <div className='direita-baixo'>
                    <div className='direita-baixo-esquerda'></div>
                    <div className='direita-baixo-direita'></div>
                </div>
            </div>
        </div>
    </>
}

export default Painel;