const koa = require('koa');
const app = new koa();

app.use(function* () {
  this.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});