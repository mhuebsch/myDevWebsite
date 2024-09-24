export function createElement(tag, classNames) {
  let el = document.createElement(tag);

  if (classNames && typeof classNames === 'string') {
    el.classList.add(...classNames.split(' '));
  }
  if (classNames && Array.isArray(classNames)) {
    el.classList.add(...classNames);
  }
  return el;
}
