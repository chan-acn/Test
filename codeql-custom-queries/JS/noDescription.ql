/**
* @name JavaScript functions without description
* @description Detects JavaScript functions that do not have a description.
* @kind problem
* @problem.severity warning
* @precision high
* @id js/function-without-description
* @tags documentation maintainability
*/
 
import javascript
 
from Function f
where f.getName() != "" and
(
    not exists(f.getDocumentation()) or
    f.getDocumentation().getDescription() = ""
)
select f, "Function '" + f.getName() + "' does not have description"
