/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

// Get all variable declarators
from VariableDeclarator vd, VarRef v
where
  // v is a variable declared by this declarator
  v = vd.getBindingPattern().getAChild()* and
  // Only flag names not in camelCase
  not v.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select v, "Variable '" + v.getName() + "' is not camelCase."
