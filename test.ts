type ObjectRequest = {};
type Req = [ObjectRequest] | [];
interface FixtureBot {
  string?: {
    type: {
      uuid?: string,
      name?: string,
      default?: string,
      address?: string,
    }
  },
  number?: {
    phone?: number,
  },
}

function get(request: Req): void {
  const requestIsNotArray = !Array.isArray(request);
  let requestIsObject: Boolean;
  if (requestIsNotArray) {
    requestIsObject = typeof request === "object" && request !== null;
    handleObject(request);
  }
  handleArray(request);
}

function handleArray(request: Req): void {

}

function handleObject(request: ObjectRequest): void {
  const keys = Object.keys(request);
  if (keys.length === 0) {
    throw new Error('Error: Empty object found');
  };
  keys.map(key => {
    request[key]
  })
}


