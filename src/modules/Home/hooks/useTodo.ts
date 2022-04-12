import { useReducer, useCallback, useMemo, useState } from "react";

interface ITodo {
  active: boolean;
  key: number;
  name: string;
}

enum TypeEnum {
  ADD,
  DELETE,
}

type FilterEnum = "not active" | "filter by name" | "none";

type ActionType =
  | {
      type: TypeEnum.ADD;
      value: ITodo;
    }
  | {
      type: TypeEnum.DELETE;
      value: number;
    };

function softDelete(state: ITodo[], key: number) {
  return state.map((v) => {
    if (v.key === key) return { ...v, active: false };
    return v;
  });
}

function reducer(state: ITodo[], action: ActionType) {
  switch (action.type) {
    case TypeEnum.ADD:
      return [...state, action.value];
    case TypeEnum.DELETE:
      return softDelete(state, action.value);
  }
}

export const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [activeFilter, setActiveFilter] = useState("none");

  const filtered = useMemo(() => {
    switch (activeFilter) {
      case "not active":
        return state.filter(({ active }) => !active);

      case "filter by name":
        return state.filter(({ active }) => active).filter(({ name }) => name === "joao");

      case "none":
      default:
        return state.filter(({ active }) => active);
    }
  }, [state, activeFilter]);

  const filters: FilterEnum[] = ["not active", "filter by name", "none"];

  const updateFilter = useCallback((value: FilterEnum) => {
    setActiveFilter(value);
  }, []);

  const addTodo = useCallback(({ value, key }: { value: string; key?: number }) => {
    dispatch({
      type: TypeEnum.ADD,
      value: {
        name: value,
        key: key ?? Math.random(),
        active: true,
      },
    });
  }, []);

  const removeTodo = useCallback(({ key }: { key: number }) => {
    dispatch({
      type: TypeEnum.DELETE,
      value: key,
    });
  }, []);

  return { state: filtered, addTodo, removeTodo, filters, updateFilter, activeFilter };
};
