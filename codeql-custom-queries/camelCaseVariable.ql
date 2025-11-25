import javascript

/**
 * Check if a variable name is camelCase.
 */
predicate isCamelCase(string name) {
  name.regexpMatch("^[a-z][a-zA-Z0-9]*$")
}

from Variable v
where
  not isCamelCase(v.getName())
select v, "Variable '" + v.getName() + "' is not camelCase."
