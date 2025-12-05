/**
 * @name Non-camelCase Variable Names
 * @description Finds all variable names that do not follow the camelCase naming convention.
 * @kind problem
 * @problem.severity warning
 * @id js/non-camelcase-variable-names
 * @tags maintainability style
 */
 import javascript
 from javascript
 import Variable
 from Variable
 import Naming
 from Naming
 class NonCamelCaseVariable extends Variable {
   NonCamelCaseVariable() {
	 this.getName().matches("[^a-z][a-zA-Z0-9]*|[a-z]+(_[a-zA-Z0-9]+)+|[A-Z][a-zA-Z0-9]*")
   }
 }
 from NonCamelCaseVariable v
 select v, "Variable name does not follow camelCase naming convention."
