import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// todoList.todos.forEach( crearTodoHtml ); cuando el primer argumento 
// del callback, que estamos obteniendo se pasa como para parametro al metodo 
// que se esta llamando  

todoList.todos[0].imprimirClase();