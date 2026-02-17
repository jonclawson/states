const logger = (store: any) => (next: any) => (action: any) => {
  console.group?.(action.type);
  console.log('prev', store.getState());
  console.log('action', action);
  const result = next(action);
  console.log('next', store.getState());
  console.groupEnd?.();
  return result;
};

export default logger;
