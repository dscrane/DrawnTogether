export class BaseError extends Error {
  constructor(name, isOperational, description) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.isOperational = isOperational;
    this.description = description;
    Error.captureStackTrace(this);
  }
}

export class CircleError extends BaseError {
  constructor(name, description = "Not found.", isOperational = true) {
    super(name, isOperational, description);
  }
}
