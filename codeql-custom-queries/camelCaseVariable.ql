/**
 * @name Detect non-camelCase JavaScript variables
 * @description Finds variables that are not camelCase, including destructured variables
 * @kind problem
 * @id js/nonCamelCaseVariables
 * @tags maintainability, style
 */

import javascript

predicate isCamelCase(string n) {
  n.regexpMatch("^[a-z][a-zA-Z0-9]*$")
}

from DeclStmt ds, VariableDeclarator vd, Variable v
where
  vd = ds.getDecl(*) and                     // all declarators in this declaration
  v = vd.getBindingPattern().getAVariable() and
  not isCamelCase(v.getName())
select v, "Variable '" + v.getName() + "' is not camelCase."
