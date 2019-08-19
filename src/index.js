export default function(text) {
  const el = document.createElement('textarea')
  el.style.position = 'fixed'
  el.style.top = 0
  el.style.left = 0
  el.readOnly = true
  el.value = text
  document.body.appendChild(el)
  el.select()
  el.setSelectionRange(0, el.value.length)
  const result = document.execCommand('copy')
  document.body.removeChild(el)
  return result
}
