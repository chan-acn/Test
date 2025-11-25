import javascript
 
/** Predicate: checks camelCase */
predicate isCamelCase(string n) {
  n.matches("[a-z][a-zA-Z0-9]*")
}
 
from VariableDeclarator v
where v.getId().getName() != undefined
  and not isCamelCase(v.getId().getName())
select v, "Variable '" + v.getId().getName() + "' is not camelCase."
