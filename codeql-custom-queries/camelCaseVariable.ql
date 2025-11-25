/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds variables in JS code that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */
import javascript

from Variable v
where not v.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select v, "Variable '" + v.getName() + "' is not camelCase."
