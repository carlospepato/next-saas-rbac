import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeone = ability.can('invite', 'User')
const userCanDeleteSomeone = ability.can('delete', 'User')

console.log(userCanInviteSomeone) // true
console.log(userCanDeleteSomeone) // false
