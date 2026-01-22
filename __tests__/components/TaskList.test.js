
import { render, fireEvent } from '@testing-library/react-native';
import TaskList from '../../components/TaskList';

describe('TaskList', () => {
  // test if the TaskList component renders correctly
  test('renders correct tasks', () => {
    const tasks = ['Buy milk', 'Do laundry'];
    const mockHandleDeleteTask = jest.fn();

    const { getByText } = render(
      <TaskList tasks={tasks} handleDeleteTask={mockHandleDeleteTask} />
    );
    expect(getByText('Buy milk')).toBeTruthy();
    expect(getByText('Do laundry')).toBeTruthy();
  });

  // test if the handleDeleteTask function is called when the delete button is pressed
  test('calls handleDeleteTask when delete button is pressed', () => {
    const tasks = ['Buy milk'];
    const mockHandleDeleteTask = jest.fn();

    const { getByTestId } = render(
      <TaskList tasks={tasks} handleDeleteTask={mockHandleDeleteTask} />
    );
    const deleteButton = getByTestId('buttonDelete');
    fireEvent.press(deleteButton);
    expect(mockHandleDeleteTask).toHaveBeenCalledWith(0);
  });
});
