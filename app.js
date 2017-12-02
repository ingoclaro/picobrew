// /API/pico/register?uid=2bebaedff2bf6d3416931bcc24633f12
// #T#
//
// /API/pico/picoChangeState?picoUID=2bebaedff2bf6d3416931bcc24633f12&state=2
//
//
// /API/pico/checkFirmware?uid=2bebaedff2bf6d3416931bcc24633f12&version=0.0.21
// #F#
//
// /API/pico/getActionsNeeded?uid=2bebaedff2bf6d3416931bcc24633f12
// ##
//
// /API/pico/log?uid=2bebaedff2bf6d3416931bcc24633f12&sesId=04af9c62fe4a80&wort=63&therm=275&step=heating%20water&error=
//
//
// /API/pico/getRecipe?uid=2bebaedff2bf6d3416931bcc24633f12&rfid=04af9c62fe4a80&ibu=-1&abv=-1.0
// {recepie}
//

const Koa = require('koa')
const route = require('koa-route')
// const parse = require('co-body')

const app = new Koa()

app.use(route.get('/API/pico/register', register))
app.use(route.get('/API/pico/picoChangeState', picoChangeState))
app.use(route.get('/API/pico/checkFirmware', checkFirmware))
app.use(route.get('/API/pico/getActionsNeeded', getActionsNeeded))
app.use(route.get('/API/pico/log', log))
app.use(route.get('/API/pico/getRecipe', getRecipe))
app.use(route.get('/*', all))


async function all(ctx) {
  let headers = this.request.headers
  let query = this.request.query
  let env = process.env

  console.log('headers', headers)
  console.log('query', query)
  console.log('ctx', ctx)

  ctx.body = ''
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function register(ctx) {
  console.log('register')

  ctx.body = '#T#'
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function picoChangeState(ctx) {
  console.log('picoChangeState')

  ctx.body = ''
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function checkFirmware(ctx) {
  console.log('checkFirmware')

  ctx.body = '#F#'
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function getActionsNeeded(ctx) {
  console.log('getActionsNeeded')

  ctx.body = '##'
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function log(ctx) {
  console.log('log')

  ctx.body = ''
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

async function getRecipe(ctx) {
  console.log('getRecipe')

  ctx.body = process.env.RECIPE || ''
  ctx.status = 200
  ctx.type = 'text/plain; charset=IBM437'
}

console.log('listening to port 3000')
app.listen(3000)
