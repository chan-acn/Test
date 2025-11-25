/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds all variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

/**
 * Select all identifiers that are declared as variables
 * (including let, const, var, destructured)
 */
from Identifier id
where
  // Only consider variables declared in a VariableDeclarator
  id.getDeclaringNode() instanceof VariableDeclarator and
  // Regex for camelCase: starts with lowercase, then letters or digits
  not id.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select id, "Variable '" + id.getName() + "' is not camelCase."
