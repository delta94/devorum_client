export default data => (
  data === undefined ||
  data === null ||
  (typeof data === 'object' && JSON.stringify(data) === '{}') ||
  (typeof data === 'string' && data.trim().length === 0)
)