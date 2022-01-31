function checkHealth({ name, health }) {
    let outValue = '';
    if (health > 50) {
      outValue = 'healthy';
    } else if (health < 15) {
      outValue = 'critical';
    } else {
      outValue = 'wounded';
    }
    return `${name} is ${outValue}`;
  }
  export default checkHealth;