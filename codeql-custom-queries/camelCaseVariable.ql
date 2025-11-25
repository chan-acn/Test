/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds JS variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

from VariableDeclaration vd, Identifier id
where
  id = vd.getAChild*() and // get identifiers declared in this VariableDeclaration
  not id.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select id, "Variable '" + id.getName() + "' is not camelCase."
