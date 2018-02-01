export default function() {
  this.namespace = '/api';
  this.get('/tasks');
  this.get('/tasks/:id');
  this.post('/tasks');
  this.del('/tasks/:id');
}
export function testConfig() {
  this.namespace = '';
  this.get('/tasks');
  this.get('/tasks/:id');
  this.post('/tasks');
  this.del('/tasks/:id');
}
