/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

from Function f
where not f.getName().matches("^[a-z][A-Za-z0-9]*$")
select f, "Function name '" + f.getName() + "' is not camelCase."
