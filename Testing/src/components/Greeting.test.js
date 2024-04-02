import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

test('render Hello World as a text', () => {
    //Arrange
    render(<Greeting/>);

    //Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false } );
    expect(helloWorldElement).toBeInTheDocument();
})

test('render when button is not pressed', () => {
    //Arrange
    render(<Greeting/>);

    //Act
    // ... nothing

    // Assert
    const paragraphElement = screen.getByText('It\'s a good to see you', { exact: false } );
    expect(paragraphElement).toBeInTheDocument();
})

test('render when button is pressed', () => {
    //Arrange
    render(<Greeting/>);

    //Act
    const buttomElement = screen.getByRole('button');
    userEvent.click(buttomElement)
    // ... nothing

    // Assert
    let paragraphElement = screen.getByText('Changed', { exact: false } );
    expect(paragraphElement).toBeInTheDocument();

    paragraphElement = screen.queryByText('good to see', { exact: false } )
    expect(paragraphElement).toBeNull();

})