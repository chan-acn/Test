/**
 * @name Detect non-camelCase JavaScript funtions
 * @description Finds funtions that are not camelCase
 * @kind problem
 * @problem.severity error
 * @id js/nonCamelCaseFuntions
 * @tags maintainability, style
 */

import javascript

from Function f
where not f.getName().matches("^[a-z][A-Za-z0-9]*$")
select f, "Function name '" + f.getName() + "' is not camelCase."
