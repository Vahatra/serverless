import * as uuid from 'uuid'

import { TodoItem } from '../models/TodoItem'
import { TodoAccess } from '../dataLayer/todoAccess'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { parseUserId } from '../auth/utils'

const todoAccess = new TodoAccess()

export async function getTodos(userId): Promise<TodoItem[]> {
  return todoAccess.getTodos(userId)
}

export async function createTodo(
  newTodo: CreateTodoRequest,
  jwtToken: string
): Promise<TodoItem> {

  const todoId = uuid.v4()
  const userId = parseUserId(jwtToken)
  const item = {
    todoId: todoId,
    userId: userId,
    ...newTodo
  }

  return await todoAccess.createTodo(item)
}
