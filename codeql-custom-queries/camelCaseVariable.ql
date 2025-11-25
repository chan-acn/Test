
/**
 * @name Variables should use camelCase
 * @description Flags variable names that are not in camelCase.
 * @kind problem
 * @problem.severity warning
 * @id js/non-camelcase-variable
 */

import javascript

predicate isCamelCase(string name) {
  name.matches("[a-z][a-zA-Z0-9]*") and not name.matches(".*_.*")
}

from VarDecl v
where not isCamelCase(v.getName())
select v, "Variable name '" + v.getName() + "' is not camelCase."
