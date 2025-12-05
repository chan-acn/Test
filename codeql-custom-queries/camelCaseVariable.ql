/**
 * @name Non-camelCase Variable Names
 * @description Finds variable names that do not follow the camelCase naming convention.
 * @kind problem
 * @problem.severity error
 * @id non-camelcase-variable-names
 * @tags maintainability style
 */

import javascript

from Variable v
where not v.getName().matches("[a-z][a-zA-Z0-9]*")
select v, "This variable does not follow camelCase naming convention."
