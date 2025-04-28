export const isValidDate = (date: string): boolean => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime()) && parsedDate > new Date();
};

export const isEmpty = (value: any): boolean => {
    return value === null || value === undefined || value === '';
};

export const validateEventInput = (title: string, description: string, date: string): boolean => {
    return !isEmpty(title) && !isEmpty(description) && isValidDate(date);
};

export const validateUserInput = (username: string, password: string): boolean => {
    return !isEmpty(username) && !isEmpty(password);
};