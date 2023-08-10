import printer from './lib/printerHelpers.js'
import { add, sub, mul, div } from './lib/mathHelpers.js'
import { ADD_TODO, REMOVE_TODO } from './utils/constants.js'

printer(add(1, 2))
printer(sub(1, 2))
printer(mul(1, 2))
printer(div(1, 2))

printer('Here is a constant from constants.js: ' + ADD_TODO)
printer(`Here is another constant from constants.js: ${REMOVE_TODO}`)

printer('Hello World!')