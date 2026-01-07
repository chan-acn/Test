/**
 * @name Functions not in PascalCase
 * @description Finds JavaScript/TypeScript functions and methods whose names do not follow PascalCase naming convention.
 * @kind problem
 * @problem.severity warning
 * @precision medium
 * @id js/functions-not-pascal-case
 * @tags maintainability
 */

import javascript

from Function f
where
  f.hasName() and
  not f.getName().regexpMatch("^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$")
select f, "Function name '" + f.getName() + "' is not in PascalCase."
