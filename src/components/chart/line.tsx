/* eslint-disable react-hooks/exhaustive-deps */
import * as d3 from 'd3';
import { useMemo } from 'react';

type LineChartProps = {
  width: number;
  height: number;
  data: number[];
  area?: boolean;
};

export default function LineChart({
  width,
  height,
  data,
  area = true,
}: LineChartProps) {
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, data.length ?? 600]) // note: limiting to 1000 instead of max here because of extreme values in the dataset
      .range([0, width]);
  }, [data, width]);

  // set the dimensions and margins of the graph
  const yScale = useMemo(() => {
    const max = Math.max(...data.map((d) => Number(d)));
    return d3.scaleLinear().domain([0, max]).range([height, 0]);
  }, [data, height]);

  const areaPath = useMemo(() => {
    const areaGenerator = d3
      .area()
      .x((d) => xScale(d[0]))
      .y0(() => yScale(0))
      .y1((d) => yScale(d[1]));
    // .curve(d3.curveBasis);
    return areaGenerator(data.map((value, index) => [index, value]));
  }, [data]);

  const linePath = useMemo(() => {
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));
    // .curve(d3.curveBasis);
    return lineGenerator(data.map((value, index) => [index, value]));
  }, [data]);

  return (
    <svg width={width} height={height}>
      <path
        d={linePath ? linePath : 'M0 0'}
        stroke='#69b3a2'
        strokeWidth={2}
        fillOpacity={0}
        // strokeLinejoin='round'
      />
      {area && (
        <path
          d={areaPath ? areaPath : 'M0 0'}
          fill='#69b3a2'
          fillOpacity={0.3}
        />
      )}
    </svg>
  );
}
