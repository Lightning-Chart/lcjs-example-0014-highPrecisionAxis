/*
 * LightningChartJS example showcasing the High Precision Axis XY feature which allows zooming of microseconds precision without any dirty data transforming
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, Themes } = lcjs

const chart = lightningChart()
    .ChartXY({
        defaultAxisX: {
            type: 'linear-highPrecision',
        },
    })
    .setTitle('High precision Axis XY (1 second high-resolution data)')
    .setPadding({ right: 40 })

const axisX = chart.getDefaultAxisX().setTickStrategy(AxisTickStrategies.Time, (timeTicks) => timeTicks)

const axisY = chart.getDefaultAxisY()

const trace0 = chart
    .addLineSeries({
        dataPattern: {
            pattern: 'ProgressiveX',
        },
    })
    .setCursorInterpolationEnabled(true)

const trace1 = chart
    .addLineSeries({
        dataPattern: {
            pattern: 'ProgressiveX',
        },
    })
    .setCursorInterpolationEnabled(true)

chart
    .addLegendBox()
    .add(chart)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.3,
    })

// Fetch example data.
fetch(new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'examples/assets/0014/data.json')
    .then((r) => r.json())
    .then((data) => {
        // Data X coordinates are in milliseconds starting from 0.
        trace0.add(data['trace0'])
        trace1.add(data['trace1'])
        axisX.fit(false)

        // Animate zoom in.
        setTimeout(() => {
            axisX.setInterval({
                start: 436.72461163324084,
                end: 436.89107794426303,
                animate: 1000,
            })
            axisY.setInterval({
                start: 87.52113652316002,
                end: 89.79482263187646,
                animate: 1000,
            })

            // Animate zoom out.
            setTimeout(() => {
                axisX.fit(2000)
                axisY.fit(2000)
            }, 2500)
        }, 1500)
    })
