const add = (a, b) => {
    
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e
  }

const sub = (a, b) => {
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e
  }

const mul = (a, b) => {
    var c = 0,
      d = typeof a == 'number'? a.toString():a,
      e = typeof b == 'number'? b.toString():b
    try {
      c += d.split('.')[1].length
    } catch (f) {
    }
    try {
      c += e.split('.')[1].length
    } catch (f) {
    }
    return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
  }

const div = (a, b) => {
    
    var c, d, e = 0,
      f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {
    }
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {
    }
    return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math.pow(10, f - e))
  }

const res = (a, e) => {
    var n = a
    if (n > 0 && n < Math.pow(10, -6)) {
      n = 0
      return n.toFixed(e)
    }

    n = n.toString()
    if (n.indexOf('.') == -1) {
      return n
    } else {
      n = n.substring(0, n.indexOf('.') + parseInt(e) + 1)
      return n
    }
  }

const cmpl = (a, e) => {
    var n = a
    if (n > 0 && n < Math.pow(10, -6)) {
      n = 0
      return n.toFixed(0)
    }
    n = n.toString()
    if (n.indexOf('.') === -1) {
      let idx = 0
      n = n + '.'
      while (idx < e) {
        n = n + '0'
        idx++
      }
      return n
    } else {
      let star = n.split('.')
      let len = star[1].length
      if (len < e) {
        let idx = 0
        while (idx + len < e) {
          star[1] = star[1] + '0'
          idx++
        }
      }

      if (len > e) {
        star[1] = star[1].substring(0, e)
      }

      n = star.join('.')
      return n
    }
}

export {add, sub, mul, div, res, cmpl}