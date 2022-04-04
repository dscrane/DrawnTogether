export class PolarGrid {
  constructor({ width, centerPoint }) {
    this._svgRadius = (width * 0.99) / 2;
    this._ringSpacing = (width * 0.99) / 2 / 50;
    this._xAxisCenter = centerPoint.x;
    this._yAxisCenter = centerPoint.y;
    this._polarGridPath = this.createPolarGridPath();
  }

  get polarGridPath() {
    return this._polarGridPath;
  }
  // Get the line starting x point
  xStartPoint = (radian, theta) =>
    parseFloat(
      (
        this._xAxisCenter +
        this._ringSpacing * radian * -Math.cos(theta)
      ).toFixed(4)
    );
  // Get the line starting y point
  yStartPoint = (radian, theta) =>
    parseFloat(
      (
        this._yAxisCenter +
        this._ringSpacing * radian * Math.sin(theta)
      ).toFixed(4)
    );
  // Get the line ending x point
  xEndPoint = (theta) =>
    parseFloat(
      (this._xAxisCenter + this._svgRadius * -Math.cos(theta)).toFixed(4)
    );
  // Get the line ending y point
  yEndPoint = (theta) =>
    parseFloat(
      (this._yAxisCenter + this._ringSpacing * 50 * Math.sin(theta)).toFixed(4)
    );
  // Template for the circle path string
  circlePathTemplate = (cx, cy, r) => {
    return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${
      r * 2
    },0 a ${r},${r} 0 1,0 -${r * 2},0 `;
  };

  // Add a center circle for the whole grid
  // Creates the rings of the polar grid
  createRings = () => {
    let ringsPath = "";
    let i = this._ringSpacing * 10;
    while (i < this._svgRadius + this._ringSpacing) {
      const radius = parseFloat(i.toFixed(4));
      // path = path + circlePathTemplate(grid.cx, grid.cy, radius);
      ringsPath =
        ringsPath +
        this.circlePathTemplate(this._xAxisCenter, this._yAxisCenter, radius);
      i += this._ringSpacing * 10;
    }
    return ringsPath;
  };
  // Create full lines at 30 degree increments
  createFullLines = () => {
    let fullRingsPath = "";
    for (let i = 0; i < 360; i += 30) {
      const theta = i * (Math.PI / 180);
      fullRingsPath =
        fullRingsPath +
        `M ${this.xStartPoint(0.5, theta)}, ${this.yStartPoint(
          0.5,
          theta
        )} L ${this.xEndPoint(theta)}, ${this.yEndPoint(theta)} `;
      // path = path + `M ${xStartPoint(0.5, theta)}, ${yStartPoint(0.5, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
    return fullRingsPath;
  };
  createLongLines = () => {
    let longLinesPath = "";
    for (let i = 0; i < 360; i += 10) {
      if (i % 30 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      longLinesPath =
        longLinesPath +
        `M ${this.xStartPoint(5, theta)}, ${this.yStartPoint(
          5,
          theta
        )} L ${this.xEndPoint(theta)}, ${this.yEndPoint(theta)} `;
      // path = path + `M ${xStartPoint(5, theta)}, ${yStartPoint(5, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
    return longLinesPath;
  };
  createMediumLines = () => {
    let mediumLinesPath = "";
    for (let i = 0; i < 360; i += 2) {
      if (i % 30 === 0 || i % 10 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      mediumLinesPath =
        mediumLinesPath +
        `M ${this.xStartPoint(15, theta)}, ${this.yStartPoint(
          15,
          theta
        )} L ${this.xEndPoint(theta)}, ${this.yEndPoint(theta)} `;
      // path = path + `M ${xStartPoint(15, theta)}, ${yStartPoint(15, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
    return mediumLinesPath;
  };
  createShortLines = () => {
    let shortLinesPath = "";
    for (let i = 0; i < 360; i += 1) {
      if (i % 30 === 0 || i % 10 === 0 || i % 2 === 0) {
        continue;
      }
      const theta = i * (Math.PI / 180);
      shortLinesPath =
        shortLinesPath +
        `M ${this.xStartPoint(35, theta)}, ${this.yStartPoint(
          35,
          theta
        )} L ${this.xEndPoint(theta)}, ${this.yEndPoint(theta)} `;
      // path = path + `M ${xStartPoint(35, theta)}, ${yStartPoint(35, theta)} L ${xEndPoint(theta)}, ${yEndPoint(theta)} `;
    }
    return shortLinesPath;
  };

  createPolarGridPath = () =>
    this.circlePathTemplate(
      this._xAxisCenter,
      this._yAxisCenter,
      0.5 * this._ringSpacing
    ) +
    this.createRings() +
    this.createFullLines() +
    this.createLongLines() +
    this.createMediumLines() +
    this.createShortLines();
}
