import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    first_column:
      '1.46 m (.mw-parser-output .frac{white-space:nowrap}.mw-parser-output .frac .num,.mw-parser-output .frac .den{font-size:80%;line-height:0;vertical-align:super}.mw-parser-output .frac .den{vertical-align:sub}.mw-parser-output .sr-only{border:0;clip:rect(0,0,0,0);clip-path:polygon(0px 0px,0px 0px,0px 0px);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}4 ft 9+1⁄4 in)',
    first_column_number: '1.46',
    second_column: ' Nancy Voorhees (USA)',
    third_column: '20 May 1922',
    fourth_column: 'Simsbury[1]'
  },
  {
    first_column: '1.485 m (4 ft 10+1⁄4 in)',
    first_column_number: '1.485',
    second_column: ' Elizabeth Stine (USA)',
    third_column: '26 May 1923',
    fourth_column: 'Leonia[1]'
  },
  {
    first_column: '1.485 m (4 ft 10+1⁄4 in)',
    first_column_number: '1.485',
    second_column: ' Sophie Eliott-Lynn (GBR)',
    third_column: '6 August 1923',
    fourth_column: 'Brentwood[1]'
  },
  {
    first_column: '1.524 m (5 ft 0 in)',
    first_column_number: '1.524',
    second_column: ' Phyllis Green (GBR)',
    third_column: '11 July 1925',
    fourth_column: 'London[1]'
  },
  {
    first_column: '1.552 m (5 ft 1 in)',
    first_column_number: '1.552',
    second_column: ' Phyllis Green (GBR)',
    third_column: '2 August 1926',
    fourth_column: 'London[1]'
  },
  {
    first_column: '1.58 m (5 ft 2 in)',
    first_column_number: '1.58',
    second_column: ' Ethel Catherwood (CAN)',
    third_column: '6 September 1926',
    fourth_column: 'Regina[1]'
  },
  {
    first_column: '1.58 m (5 ft 2 in)',
    first_column_number: '1.58',
    second_column: ' Lien Gisolf (NED)',
    third_column: '3 July 1928',
    fourth_column: 'Brussels[1]'
  },
  {
    first_column: '1.595 m (5 ft 2+3⁄4 in)',
    first_column_number: '1.595',
    second_column: ' Ethel Catherwood (CAN)',
    third_column: '5 August 1928',
    fourth_column: 'Amsterdam[x1]'
  }
]

const BarChartVersion2 = () => {
  return (
    <ResponsiveContainer width='100%' height='40%' aspect={2}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='fourth_column' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='first_column_number' barSize={50} fill='#413ea0' />
        <Line type='monotone' dataKey='first_column_number' stroke='#ff7300' />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default BarChartVersion2
