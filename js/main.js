'use strict'

import '../style/style.css'
import { timeline } from 'motion'

//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

//Imports
import Alpine from 'alpinejs'

// Setup before DOM loads
const initApp = async () => {
  // 🗻 Alpine modules
  window.Alpine = Alpine
  Alpine.data('data', Data)
  Alpine.start()
  await delay(500)
  // const mainAnimation = animate()
  // mainAnimation.play()

  const sequence = [['main', { opacity: [0, 1], y: [10, 0] }]]
  select('.chart-bar', 'all').forEach((chart) => {
    sequence.push([
      chart,
      { height: [0, chart.style.height] },
      {
        at: '-0.3',
        duration: 0.4,
        delay: 0.15,
        easing: 'ease-out',
      },
    ])
  })

  timeline(sequence)
}

event(document, 'DOMContentLoaded', initApp)

// 🚩 Alpine Database
function Data() {
  return {
    // Everything whe Alpine loads
    init() {
      this.dataBase = this.fetchData()
    },
    appInfo: {
      title: 'Expense Chart Module',
      version: '0.0.1',
    },
    dataBase: null,

    async fetchData() {
      const request = await fetch('./data/data.json')
      const data = await request.json()
      return data
    },
    async highestAmount() {
      const data = await this.dataBase
      const amount = data.map((d) => {
        return d.amount
      })
      const sortedAmount = amount.sort((a, b) => (a < b ? 1 : -1))
      return sortedAmount[0]
    },
    async setBars(element, item) {
      let high = await this.highestAmount()
      element.style.height = `${(item.amount * 70) / high}%`
      item.amount === high ? element.classList.add('active') : ''
    },
    handelToolTip(element) {
      const target = element.parentNode.childNodes[3]
      if (target.classList.contains('show')) {
        setTimeout(() => {
          target.classList.remove('show')
        }, 100)
        return
      }
      target.classList.add('show')
    },
  }
}
