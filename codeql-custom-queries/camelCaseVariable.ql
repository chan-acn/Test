/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds JS variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

from VariableDeclarator vd
where not vd.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$")
select vd, "Variable '" + vd.getName() + "' is not camelCase."
