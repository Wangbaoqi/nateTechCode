


//

const wm = new WeakMap();

function Public() {
  const data = {
    name: 'nate',
    getName() {
      return this.name;
    }
  }
  wm.set(this, data);
}

Public.prototype.method = function () {
  const data = wm.get(this);
  return data.getName();
}

export default Public;