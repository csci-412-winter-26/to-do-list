import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly
test('renders correctly', () => {
  render(<App />);
});

// test when the user adds a new task
test('Add a new task', async () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter task');
  fireEvent.changeText(input, 'Buy milk');
  const button = getByTestId('buttonAdd');
  fireEvent.press(button);
  await waitFor(() => {
    expect(getByText('Buy milk')).toBeTruthy();
  });
});

// test when the user deletes a task
test('Delete a task', () => {
  const { getByPlaceholderText, getByTestId, queryByText } = render(<App />);

  // add a task first
  const input = getByPlaceholderText('Enter task');
  fireEvent.changeText(input, 'Buy milk');
  const button = getByTestId('buttonAdd');
  fireEvent.press(button);

  // delete the newly added task
  const deleteButton = getByTestId('buttonDelete');
  fireEvent.press(deleteButton);
  const toDoText = queryByText('Buy milk');
  expect(toDoText).toBeNull();
});
