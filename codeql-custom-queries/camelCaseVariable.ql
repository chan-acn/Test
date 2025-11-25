import javascript

/**
 * Find JavaScript variables that are not camelCase
 * without using a separate predicate.
 */
from Variable v
where not v.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select v, "Variable '" + v.getName() + "' is not camelCase."
