// write the metadata for the query
/**
 * @name Non-camel-case variable names
 * @description Finds variable names that do not follow camelCase naming conventions.
 * @kind problem
 * @problem.severity warning
 * @tags maintainability style
 * @id js/non-camel-case-variable-names
 */
 import javascript
 import VariableDeclaration
 import NamingConventions

 from NamingConventions::CamelCase
 class NonCamelCaseVariable extends VariableDeclaration::Variable {
   NonCamelCaseVariable() {
	 not this.getName().matches(CamelCase::camelCasePattern)
   }
 }
 from NonCamelCaseVariable v
 select v, "Variable name '" + v.getName() + "' does not follow camelCase naming conventions."


 // Definition of camelCase pattern
 module NamingConventions::CamelCase {
   /**
	* A regular expression pattern that matches camelCase variable names.
	*/
   predicate camelCasePattern(string pattern) {
	 pattern = "^[a-z]+([A-Z][a-z0-9]+)*$"
   }
 }	

 // Definition of VariableDeclaration module
 module VariableDeclaration {
   /**
   * A class representing variable declarations in JavaScript.
   */
   class Variable extends VariableDeclaration {
	 /**
	 * Gets the name of the variable.
	 */
	 string getName() {
	   result = this.getIdentifier().getName()
	 }
   }
   }
   /**
   * A base class for variable declarations.
   */
   abstract class VariableDeclaration extends Node {
   /**
   * Gets the identifier of the variable declaration.
   */
   Identifier getIdentifier() {
	 result = this.getAnIdentifier()
   }
   abstract Identifier getAnIdentifier()
   }
   /**
   * A class representing identifiers in JavaScript.
   */
   class Identifier extends Node {
   /**
   * Gets the name of the identifier.
   */
   string getName() {
   result = this.getText()
   }
   }
   /**
   * A base class for all nodes in the JavaScript AST.
   */
   abstract class Node {
   /**
   * Gets the text representation of the node.
   */
   string getText() {
   result = this.toString()
   }
   }
