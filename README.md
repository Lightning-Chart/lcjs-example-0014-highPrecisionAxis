# JavaScript High Precision Axis Chart

![JavaScript High Precision Axis Chart](highPrecisionAxis-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

This example showcases the `High Precision Axis XY` feature.

An XY Axis can be marked with _high precision mode_ when it is created, similarly how _logarithmic axes_ are created.
This example shows how it is done for default X Axis.

```javascript
const chart = lightningChart().ChartXY({
    // Default Axis types can only be defined when chart is created.
    defaultAxisX: {
        type: 'linear-highPrecision',
    },
})
```

_High precision Axis_ behaves just like a normal linear Axis, but with two technical differences:

1. There is a performance drop for all attached series. This is mostly an increase on GPU usage, which shows on low end devices the most, for example laptops with integrated GPUs.

2. The Axis zoom range is _significantly_ improved (read more below).

`High Precision Axis XY` currently supports all XY series types except `Heatmap Series`.

## About Axis zoom range limits

_LightningChart JS_ is easily the market leader in zooming interactions and visualization resolution, and contrary to most chart libraries, we are open about axis zooming limits.

The fact of the matter is that every kind of chart library has some limit to how small differences it can visualize. Ultimately the limits are dictated by the used technology (for us this is `WebGL`).

All veteran chart library developers have come across the issue sooner or later, when an user collides against this limit and the question is asked - how can we get higher precision? Usually this ends in decimating the end users data with tricks and gimmicks, which can lead to a working result but with the expense of user experience.

`High Precision Axis XY` feature is our reaction to a proper improvement to these limitations - it handles all the annoying stuff that users had to previously do in their _application code_ and gives even better benefits;

Here are reference tables to the achievable zoom range with normal Axis vs `High Precision Axis XY`
(achievable zoom range depends on the magnitude of Axis interval start).

### Normal Axis

| Axis interval start | Min interval | Max interval |
| :------------------ | :----------- | :----------- |
| `0`                 | `1e-4`       | `1e+16`      |
| `100`               | `1e-2`       | `1e+16`      |
| `10 000`            | `1.00`       | `1e+16`      |
| `1 000 000`         | `100`        | `1e+16`      |
| `Date.now()` (UNIX) | `73600000`   | `1e+16`      |

### High Precision Axis XY

| Axis interval start | Min interval | Max interval |
| :------------------ | :----------- | :----------- |
| `0`                 | `1e-12`      | `1e+30`      |
| `100`               | `1e-10`      | `1e+30`      |
| `10 000`            | `1e-8`       | `1e+30`      |
| `1 000 000`         | `1e-6`       | `1e+30`      |
| `Date.now()` (UNIX) | `1.00`       | `1e+30`      |


## API Links

* [Lightning Chart]
* [Automatic axis ticks options]
* [Solid fill style]
* [Color factory RGBA]
* [Chart XY]
* [Axis XY]
* [Line Series XY]
* [Legend Box]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Lightning Chart]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/functions/lightningChart-1.html
[Automatic axis ticks options]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/variables/AxisTickStrategies.html
[Solid fill style]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/SolidFill.html
[Color factory RGBA]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/functions/ColorRGBA.html
[Chart XY]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/ChartXY.html
[Axis XY]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/Axis.html
[Line Series XY]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/LineSeries.html
[Legend Box]: https://lightningchart.com/js-charts/api-documentation/v7.1.0/classes/Chart.html#addLegendBox

