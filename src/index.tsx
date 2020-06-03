import * as React from 'react'
import { render } from 'react-dom'
import '@babel/polyfill'
import 'regenerator-runtime/runtime'

import { App } from './App'

import './assets/css/main.scss'

render(<App />, document.getElementById('root'))
