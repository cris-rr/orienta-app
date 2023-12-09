export function getInitials(name) {
  const nameArray = name.split(' ')
  const initials = nameArray.map((word) => word.charAt(0))
  return initials.join('')
}