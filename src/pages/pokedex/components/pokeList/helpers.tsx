type CheckIfPageBottom = {
  event: any,
  handler: Function
};

type ScrollToBottom = {
  event: any
};

export const checkIfPageBottom = ({ event, handler }: CheckIfPageBottom) => {
  const element = event.target as HTMLElement;
  const bottom = element.scrollHeight - element.scrollTop === element.clientHeight;
  bottom && handler();
}

export const scrollToBottom = ({ event }: ScrollToBottom) => {
  const element = event.target as HTMLElement;
  element.scrollTop = element.scrollHeight - element.clientHeight;
}