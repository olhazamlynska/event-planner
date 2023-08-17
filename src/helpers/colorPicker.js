export function colorPicker(priority) {
  let colorPriority;

  switch (priority) {
    case 'High':
      colorPriority = { color: '#FF2B77' };
      break;
    case 'Medium':
      colorPriority = { color: '#E2A300' };
      break;
    case 'Low':
      colorPriority = { color: '#6BD475' };
      break;
    default:
      colorPriority = { color: '#7B61FF' };
      break;
  }
  return colorPriority;
}
