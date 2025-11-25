/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds JavaScript variables that are not camelCase
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

from DeclStmt ds, VariableDeclarator vd, Variable v
where
  vd = ds.getDecl(*) and                        // all declarators in this declaration
  v = vd.getBindingPattern().getAVariable() and
  not v.getName().regexpMatch("^[a-z][a-zA-Z0-9]*$") // direct regex check
select v, "Variable '" + v.getName() + "' is not camelCase."
