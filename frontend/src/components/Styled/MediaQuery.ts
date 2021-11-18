const MAX_MESSAGE_LENGTH = 60;

export const SmallDeviceMediaQuery = '(max-width: 768px)';

export const truncateString = (message: string): string =>
  window.matchMedia(SmallDeviceMediaQuery).matches && message.length > MAX_MESSAGE_LENGTH
    ?  message.substring(0, 57) + '...'
    :  message;
  