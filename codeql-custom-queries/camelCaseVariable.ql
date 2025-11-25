/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds JavaScript variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

// Select all variable declarators
from VariableDeclarator vd, Variable v
where
  v = vd.getBindingPattern().getAVariable() and
  not v.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select v, "Variable '" + v.getName() + "' is not camelCase."
