import javascript

/**
 * A simple regex that matches valid camelCase names:
 *   - starts with lowercase letter
 *   - then letters or digits
 *   - no underscores
 */
predicate isCamelCase(string name) {
  name.regexpMatch("^[a-z][a-zA-Z0-9]*$")
}

from VariableDeclarator v, Identifier id
where
  id = v.getId() and
  not isCamelCase(id.getName())
select id,
  "Variable '" + id.getName() +
  "' is not in camelCase format."
