import * as React from "react";

import { checkedStyles } from "../../primitives/TodoItem/styles/todoItemStyles.css";

import { todoItemsContainer } from "../../styles/App.css";
import { randomService } from "../../services/RandomService";
import { Photo } from "../../services/PhotoService";
import { styledCmpFromCss } from "../../styledComponent/styledCmpFromCss";
import { todoItemAtomicStyles } from "../TodoItemsAtomic/TodoItemAtomic.css";

interface TodoItemsInterface {
  photos: Photo[];
}

const TodoItemsContainer = styledCmpFromCss([todoItemsContainer]);
const TodoItem = styledCmpFromCss<{ checked: boolean }>([
  [({ checked }) => checked, checkedStyles],
  todoItemAtomicStyles,
]);

function TodoItems({ photos }: TodoItemsInterface) {
  return (
    <TodoItemsContainer>
      {photos.map(({ id, title }) => (
        <TodoItem key={id} text={title} checked={randomService.getRandomBoolean()}>
          {title}
        </TodoItem>
      ))}
    </TodoItemsContainer>
  );
}

export default React.memo(TodoItems);
